# Vercel Deployment Guide

## Required Environment Variables

Add these in **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**:

### Serverless API (auth)
| Variable | Value | Environment |
|----------|-------|-------------|
| `DATABASE_URL` | `postgres://avnadmin:YOUR_PASSWORD@pg-1f70b904-saideepak144-f3e0.i.aivencloud.com:11278/defaultdb?sslmode=require` | Production, Preview |
| `JWT_SECRET` | Your secure random string | Production, Preview |

### Frontend (build-time)
| Variable | Value | Environment |
|----------|-------|-------------|
| `VITE_API_URL` | `/api` | Production, Preview |
| `VITE_TMDB_API_KEY` | Your TMDB API key | Production, Preview |
| `VITE_TMDB_BASE_URL` | `https://api.themoviedb.org/3` | Production, Preview |
| `VITE_TMDB_IMAGE_BASE_URL` | `https://image.tmdb.org/t/p/original` | Production, Preview |

## Deploy

1. Push your code to GitHub
2. In Vercel, add the env vars above
3. **Redeploy** (Deployments → ⋮ → Redeploy)

Or via CLI:
```bash
vercel --prod
```
