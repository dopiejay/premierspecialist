import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CalendarCheck, Stethoscope, Users, FileText, Globe, Settings, LogOut, Phone, MessageCircle, Search, Activity, Lock } from 'lucide-react'

async function api(path, opts = {}) {
  const res = await fetch(`/api${path}`, { credentials: 'include', headers: { 'Content-Type': 'application/json' }, ...opts, body: opts.body ? JSON.stringify(opts.body) : undefined })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw Object.assign(new Error(data.error || 'Request failed'), { status: res.status })
  return data
}
const STATUSES = ['pending', 'contacted', 'confirmed', 'completed', 'cancelled']
const BADGE = { pending: 'bg-amber-100 text-amber-800', contacted: 'bg-sky-100 text-sky-800', confirmed: 'bg-emerald-100 text-emerald-800', completed: 'bg-slate-200 text-slate-700', cancelled: 'bg-red-100 text-red-700' }
const fmt = (d) => new Date(d).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
const Badge = ({ s }) => <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${BADGE[s]}`}>{s}</span>
const input = 'w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan bg-white'

function Login({ onLogin }) {
  const [err, setErr] = useState(''); const [busy, setBusy] = useState(false)
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setErr('')
    const fd = Object.fromEntries(new FormData(e.target))
    try { onLogin((await api('/auth/login', { method: 'POST', body: fd })).user) } catch (x) { setErr(x.message) } finally { setBusy(false) }
  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-purple to-purple-dark text-white p-14 relative overflow-hidden">
        <div className="dots-w absolute inset-0" />
        <div className="relative flex items-center gap-3"><span className="w-11 h-11 rounded-2xl bg-white/15 grid place-items-center"><Activity /></span><span className="font-display text-2xl font-bold">Shifa Hospital</span></div>
        <div className="relative"><h1 className="font-display text-5xl font-bold leading-tight">Manage the website and appointment requests.</h1><p className="mt-4 text-white/70 text-lg">Staff portal. Authorised users only.</p></div>
        <p className="relative text-sm text-white/50">Concept demo</p>
      </div>
      <div className="grid place-items-center p-6 bg-white">
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <span className="w-12 h-12 rounded-2xl bg-slate-200 text-purple grid place-items-center"><Lock /></span>
          <h2 className="font-display text-3xl font-bold text-purple">Staff sign in</h2>
          <input name="email" type="email" required autoComplete="username" placeholder="Email" className={input} />
          <input name="password" type="password" required autoComplete="current-password" placeholder="Password" className={input} />
          {err && <p className="text-sm text-red-600 font-semibold">{err}</p>}
          <button disabled={busy} className="w-full bg-purple text-white font-bold py-4 rounded-full hover:bg-cyan transition disabled:opacity-60">{busy ? 'Signing in…' : 'Sign in'}</button>
          <Link to="/" className="block text-center text-sm text-cyan font-semibold">← Back to website</Link>
        </form>
      </div>
    </div>
  )
}

const LINKS = [['/admin', LayoutDashboard, 'Dashboard', true], ['/admin/appointments', CalendarCheck, 'Appointments']]
const SOON = [[Stethoscope, 'Services'], [Users, 'Doctors'], [FileText, 'Health tips'], [Globe, 'Website content'], [Settings, 'Users & settings']]

function Shell({ user, onLogout, children }) {
  const cls = ({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold ${isActive ? 'bg-white text-purple' : 'text-white/80 hover:bg-white/10'}`
  return (
    <div className="min-h-screen lg:flex bg-cloud">
      <aside className="lg:w-64 lg:min-h-screen bg-purple text-white p-4 lg:p-5 flex lg:flex-col gap-2 overflow-x-auto">
        <div className="hidden lg:flex items-center gap-3 px-2 py-3 mb-4"><span className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center"><Activity size={20} /></span><span className="font-display text-xl font-bold">Shifa Admin</span></div>
        {LINKS.map(([to, Icon, label, end]) => <NavLink key={to} to={to} end={end} className={cls}><Icon size={18} /> {label}</NavLink>)}
        <p className="hidden lg:block text-[11px] tracking-widest font-bold text-white/40 mt-6 px-4">COMING NEXT</p>
        {SOON.map(([Icon, label]) => <span key={label} className="hidden lg:flex items-center gap-3 px-4 py-2.5 text-sm text-white/40"><Icon size={18} /> {label}</span>)}
        <button onClick={onLogout} className="lg:mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white/80 hover:bg-white/10"><LogOut size={18} /> Sign out</button>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center"><span className="text-sm text-ink/60">Signed in as <b className="text-purple">{user.name}</b></span><Link to="/" className="text-sm font-bold text-cyan">View website</Link></div>
        <main className="p-5 md:p-8 max-w-6xl">{children}</main>
      </div>
    </div>
  )
}

function Dashboard() {
  const [d, setD] = useState(null); const [err, setErr] = useState('')
  useEffect(() => { api('/admin/stats').then(setD).catch((e) => setErr(e.message)) }, [])
  if (err) return <p className="text-red-600">{err}</p>
  if (!d) return <p className="text-ink/60">Loading…</p>
  const cards = [['Pending', d.counts.pending, 'bg-amber-500'], ['Contacted', d.counts.contacted, 'bg-sky-500'], ['Confirmed', d.counts.confirmed, 'bg-emerald-500'], ['Last 7 days', d.lastWeek, 'bg-cyan']]
  return (
    <div className="space-y-8">
      <div><h1 className="font-display text-4xl font-bold text-purple">Dashboard</h1><p className="text-ink/60 mt-1">{d.total} appointment requests in total</p></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(([l, n, c]) => <div key={l} className="bg-white rounded-3xl p-6 shadow-sm"><span className={`block w-2 h-8 rounded-full ${c} mb-4`} /><p className="font-display text-4xl font-bold text-purple">{n}</p><p className="text-sm text-ink/60 font-semibold">{l}</p></div>)}
      </div>
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4"><h2 className="font-bold text-lg text-purple">Recent requests</h2><Link to="/admin/appointments" className="text-sm font-bold text-cyan">View all</Link></div>
        {d.recent.length === 0 && <p className="text-ink/60 text-sm">No requests yet.</p>}
        {d.recent.map((a) => (
          <div key={a.id} className="flex items-center justify-between gap-3 py-3 border-t border-slate-200 first:border-0">
            <div><p className="font-bold">{a.name}</p><p className="text-xs text-ink/60">{a.reference} · {a.service || 'No service chosen'} · {fmt(a.created_at)}</p></div><Badge s={a.status} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Row({ a, onSaved }) {
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState(a.internal_notes || '')
  const [when, setWhen] = useState(a.scheduled_for ? new Date(a.scheduled_for).toISOString().slice(0, 16) : '')
  const [busy, setBusy] = useState(false); const [err, setErr] = useState('')
  const save = async (patch) => {
    setBusy(true); setErr('')
    try { onSaved((await api(`/admin/appointments/${a.id}`, { method: 'PATCH', body: patch })).appointment) } catch (e) { setErr(e.message) } finally { setBusy(false) }
  }
  const digits = a.phone.replace(/[^\d]/g, '')
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex flex-wrap items-center justify-between gap-3">
        <div><p className="font-bold">{a.name} <span className="text-xs font-semibold text-ink/50 ml-2">{a.reference}</span></p><p className="text-sm text-ink/60">{a.service || 'No service chosen'} · wants {a.preferred_date ? new Date(a.preferred_date).toLocaleDateString('en-GB', { dateStyle: 'medium' }) : 'any date'} {a.preferred_time || ''}</p></div>
        <Badge s={a.status} />
      </button>
      {open && (
        <div className="border-t border-slate-200 p-5 space-y-4 bg-slate-200/20">
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={`tel:${a.phone}`} className="inline-flex items-center gap-2 bg-cyan text-white font-bold px-4 py-2 rounded-full"><Phone size={15} /> {a.phone}</a>
            <a href={`https://wa.me/${digits}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-mint text-cyan font-bold px-4 py-2 rounded-full"><MessageCircle size={15} /> WhatsApp</a>
            {a.email && <a href={`mailto:${a.email}`} className="inline-flex items-center gap-2 bg-white font-bold px-4 py-2 rounded-full text-purple">{a.email}</a>}
          </div>
          {a.message && <p className="bg-white rounded-xl p-4 text-sm">{a.message}</p>}
          <p className="text-xs text-ink/50">Received {fmt(a.created_at)}</p>
          <div className="flex flex-wrap gap-2">{STATUSES.map((s) => <button key={s} disabled={busy} onClick={() => save({ status: s })} className={`px-4 py-2 rounded-full text-sm font-bold capitalize border-2 ${a.status === s ? 'bg-purple text-white border-purple' : 'bg-white border-slate-200 text-purple hover:border-cyan'}`}>{s}</button>)}</div>
          <div className="grid md:grid-cols-2 gap-3">
            <label className="text-xs font-bold text-ink/60">Agreed appointment time<input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} className={`${input} mt-1`} /></label>
            <label className="text-xs font-bold text-ink/60">Internal notes (staff only)<textarea rows="2" value={notes} onChange={(e) => setNotes(e.target.value)} className={`${input} mt-1`} /></label>
          </div>
          {err && <p className="text-sm text-red-600 font-semibold">{err}</p>}
          <button disabled={busy} onClick={() => save({ internal_notes: notes || null, scheduled_for: when ? new Date(when).toISOString() : null })} className="bg-purple text-white font-bold px-6 py-3 rounded-full hover:bg-cyan transition">Save notes &amp; time</button>
        </div>
      )}
    </div>
  )
}

function Appointments() {
  const [filter, setFilter] = useState(''); const [q, setQ] = useState(''); const [query, setQuery] = useState('')
  const [list, setList] = useState(null); const [err, setErr] = useState('')
  useEffect(() => { setList(null); api(`/admin/appointments?status=${filter}&q=${encodeURIComponent(query)}`).then((d) => setList(d.appointments)).catch((e) => setErr(e.message)) }, [filter, query])
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl font-bold text-purple">Appointments</h1>
      <div className="flex flex-wrap gap-2 items-center">
        {['', ...STATUSES].map((s) => <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-full text-sm font-bold capitalize ${filter === s ? 'bg-purple text-white' : 'bg-white text-purple'}`}>{s || 'All'}</button>)}
        <form onSubmit={(e) => { e.preventDefault(); setQuery(q) }} className="ml-auto relative"><Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, phone or reference" className="pl-10 pr-4 py-2.5 rounded-full bg-white border-2 border-transparent focus:border-cyan focus:outline-none text-sm" /></form>
      </div>
      {err && <p className="text-red-600">{err}</p>}
      {!list && !err && <p className="text-ink/60">Loading…</p>}
      {list?.length === 0 && <p className="bg-white rounded-2xl p-8 text-center text-ink/60">No requests found.</p>}
      <div className="space-y-3">{list?.map((a) => <Row key={a.id} a={a} onSaved={(n) => setList((l) => l.map((x) => (x.id === n.id ? n : x)))} />)}</div>
    </div>
  )
}

export default function Admin() {
  const [user, setUser] = useState(undefined); const nav = useNavigate()
  useEffect(() => { api('/auth/me').then((d) => setUser(d.user)).catch(() => setUser(null)) }, [])
  const logout = async () => { await api('/auth/logout', { method: 'POST' }); setUser(null); nav('/admin') }
  if (user === undefined) return <div className="min-h-screen grid place-items-center text-ink/60">Loading…</div>
  if (!user) return <Login onLogin={setUser} />
  return (
    <Shell user={user} onLogout={logout}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Shell>
  )
}
