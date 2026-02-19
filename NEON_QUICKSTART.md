# Alternative: Use Neon (Free, Serverless PostgreSQL)

If Aiven connections fail from Vercel, use **Neon** – free and built for serverless.

## 1. Create Neon database (2 min)

1. Go to [https://neon.tech](https://neon.tech) → Sign up (free)
2. Create a project (e.g. `movie-app`)
3. Copy the **Connection string** (starts with `postgresql://`)

## 2. Update Vercel env

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit **DATABASE_URL** → Paste Neon connection string
3. Save

## 3. Create users table

Run this in Neon SQL Editor (Dashboard → SQL Editor):

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Redeploy

Vercel → Deployments → Redeploy

Sign up and login will work.
