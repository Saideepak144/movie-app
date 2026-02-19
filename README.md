# Netflix Clone - Full-Stack Movie App

A Netflix-style web application built with React, Node.js/Express, and PostgreSQL (Aiven).

## Features

- **Authentication**: Sign Up, Login with bcrypt password hashing
- **Protected Routes**: Redirect unauthenticated users to login
- **Landing Page**: Hero banner, movie carousel, genre-based movie rows
- **TMDB API**: Fetches trending movies and movies by genre

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (Aiven)
- **Auth**: JWT, bcrypt

## Setup

### Prerequisites

- Node.js 18+
- PostgreSQL database (e.g., [Aiven](https://aiven.io/))
- [TMDB API Key](https://www.themoviedb.org/settings/api)

### 1. Clone the repository

```bash
git clone https://github.com/Saideepak144/movie-app.git
cd movie-app
```

### 2. Server setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env` with your values:

```
PORT=5000
DATABASE_URL=postgres://user:password@host:port/database?sslmode=require
JWT_SECRET=your_secure_random_secret_key
TMDB_API_KEY=your_tmdb_api_key
```

### 3. Client setup

```bash
cd ../client
npm install
cp .env.example .env
```

Edit `client/.env`:

```
VITE_API_URL=http://localhost:5000/api
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

### 4. Run the application

**Terminal 1 - Backend:**
```bash
cd server && npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client && npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── ...
├── server/          # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routes/
└── README.md
```

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
