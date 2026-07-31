# ApniPost Website

Production marketing site for **ApniPost**, built with React + Vite.

## Stack

- React 19
- Vite
- TypeScript
- React Router DOM
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/support` | Support |
| `/delete-account` | Account Deletion |

## Project structure

```
src/
  assets/
  components/
  config/
  hooks/
  layouts/
  lib/
  pages/
  router/
  styles/
public/
  screenshots/
```

## Screenshots

Place Android app screenshots in:

```
public/screenshots/login.png
public/screenshots/home.png
public/screenshots/profile.png
```

## Environment

Optional:

```bash
VITE_SITE_URL=https://apnipost.com
```

## Deploy on Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA routing is handled by `public/_redirects`:

```
/*    /index.html   200
```
