import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import routes from './routes.js'

if (!process.env.JWT_SECRET) { console.error('JWT_SECRET is required'); process.exit(1) }
const app = express()
app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 2))
app.use(helmet())
app.use(express.json({ limit: '20kb' }))
app.use(cookieParser())

// CSRF defence: cookie is SameSite=Lax + JSON-only bodies + Origin must match on writes
app.use('/api', (req, res, next) => {
  if (req.method === 'GET' || req.method === 'HEAD') return next()
  const origin = req.get('origin')
  if (origin && origin !== process.env.CLIENT_ORIGIN) return res.status(403).json({ error: 'Forbidden' })
  if (!req.is('application/json')) return res.status(415).json({ error: 'JSON only' })
  next()
})

app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api', routes)
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }))
// Never log request bodies: they contain patient contact details
app.use((err, req, res, next) => { console.error(err.message); res.status(500).json({ error: 'Something went wrong' }) })
app.listen(process.env.PORT || 4000, () => console.log('Premier Specialist Clinic API running'))
