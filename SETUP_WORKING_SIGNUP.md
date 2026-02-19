# Fix Sign Up / Login — Get Working URL

Choose **one** option:

---

## Option A: Add Neon via Vercel (recommended)

1. Open: **[Neon on Vercel Marketplace](https://vercel.com/marketplace/neon)** → **Install**
2. Select **Create New Neon Account** → **Continue**
3. Pick region, name your database → **Create**
4. Click **Connect Project** → select **movie-app** → enable **Production** + **Preview** → **Connect**
5. **Deployments** → **⋯** → **Redeploy**

---

## Option B: Neon + manual connection string

1. Go to **[neon.tech](https://neon.tech)** → Sign up (free)
2. Create a project → copy **Connection string**
3. **Vercel** → movie-app → **Settings** → **Environment Variables**
4. Edit **DATABASE_URL** (or add new) → paste Neon connection string → **Save**
5. **Deployments** → **⋯** → **Redeploy**
6. In **Neon Console** → **SQL Editor** → run:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Verify

- **App:** https://movie-app-seven-ashen.vercel.app
- **Health:** https://movie-app-seven-ashen.vercel.app/api/health → `"db":"connected"` = OK

Then **Sign Up** and **Log In** will work.
