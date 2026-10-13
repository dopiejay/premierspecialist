import 'dotenv/config'
import fs from 'node:fs'
import bcrypt from 'bcryptjs'
import { pool } from '../src/db.js'

await pool.query(fs.readFileSync(new URL('../schema.sql', import.meta.url), 'utf8'))
console.log('Tables ready')
const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env
if (ADMIN_EMAIL && ADMIN_PASSWORD) {
  if (ADMIN_PASSWORD.length < 10) { console.error('ADMIN_PASSWORD must be at least 10 characters'); process.exit(1) }
  const hash = await bcrypt.hash(ADMIN_PASSWORD, 12)
  const r = await pool.query(
    "insert into admin_users (email, name, password_hash, role) values ($1,$2,$3,'admin') on conflict (email) do nothing returning id",
    [ADMIN_EMAIL.toLowerCase(), ADMIN_NAME || 'Admin', hash]
  )
  console.log(r.rowCount ? 'Admin user created' : 'Admin user already exists')
}
await pool.end()
