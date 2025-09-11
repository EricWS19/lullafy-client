# Lullafy Client ■
Frontend for the **Lullafy** capstone project.
Built with **React + Vite**.
---
## ■ Quick Start
# Install dependencies
npm install
# Start the dev server
npm run dev
# → open the "Local:" URL that Vite prints (usually http://localhost:5173)
---
## ■ API Setup
The client expects a backend running (see [lullafy-api](https://github.com/EricWS19/lullafy-api)).
Create a `.env` file in the root of this project with:
VITE_API_URL=http://localhost:3000
This tells the frontend where the backend API lives.
---
## ■ Routes
- `/` → Shows that the client is running
- `/users` → Lists users and their lullabies
- `/lullabies` → Lists lullabies and their users
---
## ■ Notes
- Backend must be running on port 3000 for the frontend to fetch data.
- By default, Vite runs the client on port 5173 (if that port is taken, it may use 5174 or higher).
- Always open the **Local URL** that Vite prints when starting the dev server.

## Getting Started

**Backend**
```bash
cd ../lullafy-api
node index.js

**Frontend**
```bash
cd lullafy-client
npm install
npm run dev
```

- Open http://localhost:5173
- Login with test account `tester9` / `pass`

## Features (Milestone 3)
- JWT login
- Create & list lullabies
- React Router (Home, Login, Create)

## Environment
Copy `.env.example` to `.env` and set `VITE_API_URL`.
