import pg from 'pg'
const url = process.env.DATABASE_URL || ''
export const pool = new pg.Pool({
  connectionString: url,
  ssl: /sslmode=require|neon\.tech/.test(url) ? { rejectUnauthorized: false } : false,
  max: 5,
})
