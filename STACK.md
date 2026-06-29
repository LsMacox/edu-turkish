# Stack Decisions — Edu.turkish

_Last updated: 2026-06-29 · Author: Kerem (Founding Engineer)_

## Framework — Next.js 14 (App Router, TypeScript)

**Why:** The boring default for modern React apps. App Router gives us React Server Components for fast initial loads and incremental SSR when we add backend logic. TypeScript from day one prevents whole classes of bugs before they reach prod. Huge ecosystem means every future hire already knows it.

**Alternatives considered:**
- Remix — good DX but smaller community; Next.js has more hiring surface.
- Vite + React SPA — no SSR; university listing pages need SEO.
- Astro — great for static content, but we'll need API routes soon.

## Package manager — pnpm

**Why:** Significantly faster installs than npm, strict by default (no phantom dependencies), works well on CI. npm had connection reset issues during initial setup on macOS.

## Styling — Tailwind CSS v4

**Why:** Utility-first, ships zero CSS for unused classes, v4 is the current release. Pairs naturally with Next.js. No design system yet — Tailwind keeps us moving without premature abstraction.

## Hosting (v0) — GitHub Pages (static export)

**Why:** Zero cost, zero account wiring, deploys automatically via GitHub Actions from the first push. Sufficient for a "hello world" + early-access lead capture that needs no server.

**Hosting (v1 plan) — Vercel**

When we add API routes (lead submission, search, auth) we'll migrate to Vercel. First-class Next.js support, preview deployments per PR, edge functions. Free tier is sufficient through early growth. Migration is a one-line CI change (`next start` instead of `output: 'export'`).

## Data layer (planned) — PostgreSQL via Supabase

Not needed for v0 (no server, no data). For v1 we need:
- Lead capture (email signups)
- University catalogue
- User accounts + application tracking

Supabase gives us managed Postgres, built-in auth, and a REST/realtime API on the free tier. Boring choice: SQL, not a custom graph DB or NoSQL.

## CI — GitHub Actions

**Why:** Free for public repos, zero extra accounts, runs on every push and PR. Current checks: typecheck → lint → build. Failing CI blocks merge on `main`.

## Repository

GitHub: `LsMacox/edu-turkish`  
Live URL (v0): `https://lsmacox.github.io/edu-turkish/`
