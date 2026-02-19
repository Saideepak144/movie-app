# Aiven PostgreSQL - Enable Access for Vercel

Vercel serverless functions connect from dynamic IPs. Your Aiven PostgreSQL must allow connections from anywhere.

## Steps (2 minutes)

### 1. Open Aiven Console
- Go to [https://console.aiven.io](https://console.aiven.io)
- Log in

### 2. Select your PostgreSQL service
- Click your project
- Click the PostgreSQL service (e.g. `pg-1f70b904-saideepak144-f3e0`)

### 3. Enable Public / Allow All IPs
- Go to **Settings** (or **Service settings**)
- Find **Cloud and network** or **Networking**
- Click **Edit IP address allowlist** / **Set IP address allowlist**
- Add: `0.0.0.0/0` (allows all IPv4)
- Optional: Add `::/0` for IPv6
- Click **Save**

### 4. Verify
- In **Connection information**, ensure you see a public host (e.g. `*.i.aivencloud.com`)
- Copy the **Service URI** – it should match your `DATABASE_URL` in Vercel

## Vercel Environment Variables

In [Vercel Dashboard](https://vercel.com) → Your Project → Settings → Environment Variables, ensure:

| Name | Value | Environment |
|------|-------|-------------|
| DATABASE_URL | `postgres://avnadmin:PASSWORD@HOST:PORT/defaultdb?sslmode=require` | Production, Preview |
| JWT_SECRET | Any secure random string | Production, Preview |

**Important:** No spaces or newlines in values. Paste the URI exactly.

## Redeploy

After changing Aiven or env vars:
- Vercel → Deployments → ⋮ → **Redeploy**
