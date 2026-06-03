# CLAUDE.md — ViennaBarber

Project conventions and lessons learnt. These instructions override default behavior.

## Project

ViennaBarber is a polished, German-language **demo website / sellable template** for premium Viennese barbershops. Used for cold outreach and resold to real shops. Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Deployed on **Vercel** at `viennabarber.mabasian.dev`. Aesthetic: masculine, luxurious, modern, minimal, urban, dark.

- Entry: `app/layout.tsx` (metadata, fonts, JSON-LD, default `data-theme`), `app/page.tsx` (section composition), `app/globals.css` (Tailwind + 5 theme palettes).
- SEO routes: `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`.
- Components in `src/components/`, content in `src/content/`, docs in `docs/`.
- Interactive components carry `'use client'`; sections without hooks stay Server Components for less JS.

## Lessons learnt / standing facts

- **The GitHub repo MUST live in the `mabasian` account** (`mabasian/viennabarber`). `gh` is authenticated as `mabasian`. Vercel is logged in as `mabasian` (team slug `rezas-projects-ff6aaa0d`).
- **Standing instruction — keep a CLAUDE.md with lessons learnt** (the user asks this each project; this very file fulfills it).
- **Standing instruction — deep-verify before finishing:** audit every spec requirement, run typecheck/lint/build, verify SSR content/SEO/themes; fix anything missing.
- **German copy must be natural & local** (Wien), Du-Form for a young barber audience. No machine-translation feel. Austrian terms welcome (Servus, Grätzl, Termin).
- **5 premium themes** are CSS-variable palettes in `app/globals.css` (`[data-theme=…]`): Midnight Gold (default), Espresso Steel, Vienna Bronze, Graphite Luxe, Royal Burgundy. Tokens: `--bg --surface --surface-2 --border --text --muted --accent --accent-2 --on-accent --grad-hero`. Tailwind maps them to `base/surface/surface2/line/ink/muted/accent`.
- **ThemeSwitcher is a DEMO tool** — clearly marked, easy to remove (delete file + import in `app/page.tsx`, set fixed `data-theme` in `app/layout.tsx`). Not for the customer version.
- **Booking & forms are UI-only** (no backend); wire later to Fresha/Treatwell/Salonkee/Calendly/Formspree.
- **SEO is core:** Metadata API, `HairSalon` JSON-LD, OG/Twitter, robots.ts, sitemap.ts, opengraph-image, semantic HTML, lazy images.
- **OG link preview ("business card"):** `app/opengraph-image.tsx` renders a 1200×630 card so shared links look premium on WhatsApp/social. Keep it.
- **Footer attribution:** "Website-Demo für Barbershops in Wien by Mohammadreza Abbasian", with the name linked to https://mabasian.dev. (User's prior preference on a sibling project was the short form "Mabasian (Reza)"; confirm which they want.)
- **Configs are CommonJS** (`postcss.config.js`, `tailwind.config.js` use `module.exports`) because package.json has no `"type":"module"`. ESLint warnings `no-img-element` / `no-page-custom-font` are intentionally disabled (external demo images + Google Fonts link).

## Commands

- `npm run dev` — Next dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run typecheck` — tsc --noEmit
- `npm run lint` — next lint
