import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'node:crypto'
import { z } from 'zod'
import rateLimit from 'express-rate-limit'
import { pool } from './db.js'

const COOKIE = 'sh_admin'
const STATUSES = ['pending', 'contacted', 'confirmed', 'completed', 'cancelled']
const DUMMY_HASH = bcrypt.hashSync('not-a-real-password', 10)
const limiter = (windowMin, max, error) => rateLimit({ windowMs: windowMin * 60_000, limit: max, standardHeaders: true, legacyHeaders: false, message: { error } })

// Every protected endpoint checks the session itself; hiding pages in React is not security.
const requireAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.cookies[COOKIE]
    if (!token) return res.status(401).json({ error: 'Not signed in' })
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    const { rows } = await pool.query('select id, email, name, role, active from admin_users where id = $1', [id])
    const u = rows[0]
    if (!u || !u.active) return res.status(401).json({ error: 'Not signed in' })
    if (roles && !roles.includes(u.role)) return res.status(403).json({ error: 'Not allowed' })
    req.user = u
    next()
  } catch { res.status(401).json({ error: 'Not signed in' }) }
}

const audit = (userId, action, entity, entityId, meta) =>
  pool.query('insert into audit_logs (user_id, action, entity, entity_id, meta) values ($1,$2,$3,$4,$5)', [userId, action, entity, String(entityId), meta ?? null]).catch(() => {})

const r = Router()

// ---------- Auth ----------
const loginSchema = z.object({ email: z.string().email().max(200), password: z.string().min(1).max(200) })
r.post('/auth/login', limiter(15, 10, 'Too many attempts. Try again later.'), async (req, res) => {
  const p = loginSchema.safeParse(req.body)
  if (!p.success) return res.status(400).json({ error: 'Enter a valid email and password' })
  const { rows } = await pool.query('select * from admin_users where email = $1', [p.data.email.toLowerCase()])
  const u = rows[0]
  const ok = await bcrypt.compare(p.data.password, u?.password_hash || DUMMY_HASH)
  if (!u || !u.active || !ok) return res.status(401).json({ error: 'Incorrect email or password' })
  const token = jwt.sign({ id: u.id }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.cookie(COOKIE, token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 8 * 3600_000, path: '/' })
  audit(u.id, 'login', 'admin_users', u.id)
  res.json({ user: { id: u.id, email: u.email, name: u.name, role: u.role } })
})
r.post('/auth/logout', (req, res) => { res.clearCookie(COOKIE, { path: '/' }); res.json({ ok: true }) })
r.get('/auth/me', requireAuth(), (req, res) => res.json({ user: req.user }))

// ---------- Public: appointment request ----------
const apptSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[0-9+()\s-]{7,20}$/, 'Enter a valid phone number'),
  email: z.string().trim().email().max(200).optional().or(z.literal('')),
  service: z.string().trim().max(100).optional(),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal('')),
  preferred_time: z.string().trim().max(40).optional(),
  message: z.string().trim().max(500).optional(),
  website: z.string().optional(), // honeypot
})
const newRef = () => 'SH-' + Array.from(crypto.randomBytes(6), (b) => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b % 32]).join('')
r.post('/appointments', limiter(60, 10, 'Too many requests. Please call us instead.'), async (req, res) => {
  const p = apptSchema.safeParse(req.body)
  if (!p.success) return res.status(400).json({ error: p.error.issues[0]?.message || 'Please check your details' })
  const d = p.data
  if (d.website) return res.json({ reference: newRef() }) // bot: pretend success, store nothing
  const reference = newRef()
  await pool.query(
    `insert into appointments (reference, name, phone, email, service, preferred_date, preferred_time, message)
     values ($1,$2,$3,$4,$5,$6,$7,$8)`,
    [reference, d.name, d.phone, d.email || null, d.service || null, d.preferred_date || null, d.preferred_time || null, d.message || null]
  )
  res.status(201).json({ reference })
})

// ---------- Admin: dashboard + appointments ----------
r.get('/admin/stats', requireAuth(), async (req, res) => {
  const [by, week, recent] = await Promise.all([
    pool.query('select status, count(*)::int as n from appointments group by status'),
    pool.query("select count(*)::int as n from appointments where created_at > now() - interval '7 days'"),
    pool.query('select id, reference, name, service, status, created_at from appointments order by created_at desc limit 5'),
  ])
  const counts = Object.fromEntries(STATUSES.map((s) => [s, 0]))
  by.rows.forEach((x) => (counts[x.status] = x.n))
  res.json({ counts, total: Object.values(counts).reduce((a, b) => a + b, 0), lastWeek: week.rows[0].n, recent: recent.rows })
})

r.get('/admin/appointments', requireAuth(), async (req, res) => {
  const status = STATUSES.includes(req.query.status) ? req.query.status : null
  const q = String(req.query.q || '').trim().slice(0, 60)
  const { rows } = await pool.query(
    `select * from appointments
     where ($1::text is null or status = $1) and ($2::text is null or name ilike $2 or phone ilike $2 or reference ilike $2)
     order by created_at desc limit 100`,
    [status, q ? `%${q}%` : null]
  )
  res.json({ appointments: rows })
})

const patchSchema = z.object({
  status: z.enum(STATUSES).optional(),
  internal_notes: z.string().max(1000).nullable().optional(),
  scheduled_for: z.string().datetime({ offset: true }).nullable().optional(),
})
r.patch('/admin/appointments/:id', requireAuth(), async (req, res) => {
  const id = Number(req.params.id)
  const p = patchSchema.safeParse(req.body)
  if (!Number.isInteger(id) || !p.success) return res.status(400).json({ error: 'Invalid update' })
  const cur = (await pool.query('select * from appointments where id = $1', [id])).rows[0]
  if (!cur) return res.status(404).json({ error: 'Not found' })
  const n = { ...cur, ...p.data }
  const { rows } = await pool.query(
    'update appointments set status=$1, internal_notes=$2, scheduled_for=$3, updated_by=$4, updated_at=now() where id=$5 returning *',
    [n.status, n.internal_notes, n.scheduled_for, req.user.id, id]
  )
  if (p.data.status && p.data.status !== cur.status) audit(req.user.id, 'appointment_status', 'appointments', id, { from: cur.status, to: p.data.status })
  res.json({ appointment: rows[0] })
})

export default r
