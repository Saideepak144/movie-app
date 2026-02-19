const { Pool } = require('pg');

let pool = null;

const getPool = () => {
  if (!pool) {
    const connStr = (process.env.DATABASE_URL || '').trim().replace(/\r?\n/g, '').replace(/\s+/g, '');
    if (!connStr) {
      throw new Error('DATABASE_URL is not set');
    }
    const isAiven = connStr.includes('aivencloud.com') || connStr.includes('sslmode=require');
    pool = new Pool({
      connectionString: connStr,
      ssl: isAiven ? { rejectUnauthorized: false } : false,
      connectionTimeoutMillis: 15000
    });
  }
  return pool;
};

const createUsersTable = async () => {
  const client = getPool();
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await client.query(query);
};

module.exports = { getPool, createUsersTable };
