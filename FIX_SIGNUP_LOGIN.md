# Fix Sign Up / Login (Internal Error)

Your app returns 500 because **the database cannot connect from Vercel**. Choose one option:

---

## Option A: Fix Aiven (if you want to keep Aiven)

1. Open: **[Aiven Console → Your Project](https://console.aiven.io/)**
2. Select your **PostgreSQL** service
3. Go to **Settings** → **Cloud and network**
4. Click **Edit IP address allowlist** (or **Set IP address allowlist**)
5. Add: **`0.0.0.0/0`**
6. Save

Then in Vercel: **Deployments → ⋮ → Redeploy**

---

## Option B: Use Neon (recommended, ~5 min)

1. Go to **[neon.tech](https://neon.tech)** → Sign up (free)
2. Create a project → copy the **Connection string**
3. In **Vercel**: Settings → Environment Variables → Edit **DATABASE_URL** → paste Neon connection string → Save
4. In **Neon**: Dashboard → SQL Editor → run:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. In **Vercel**: Deployments → ⋮ → **Redeploy**

---

## Verify

- **Health check:** https://movie-app-seven-ashen.vercel.app/api/health  
  - `"db":"connected"` = fixed  
  - `"db":"disconnected"` = still blocked (check steps above)
- **App:** https://movie-app-seven-ashen.vercel.app
