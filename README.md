# ViennaBarber

Premium, deutschsprachige **Demo-Website / Vorlage** für moderne Wiener Barbershops.
Gebaut für Kaltakquise und als verkaufsfertiges Template für echte Barbershops in Wien.

🔗 **Live-Demo:** https://viennabarber.mabasian.dev
📦 **Repository:** https://github.com/mabasian/viennabarber

> „Handwerk trifft Stil." – ein fiktiver, aber glaubwürdiger Premium-Barbershop im 1. Bezirk.

---

## ✨ Features

- **Next.js 14 App Router** – serverseitig gerendert & statisch vorgerendert (Top-SEO & Speed)
- Komplett auf **Deutsch**, natürlicher Wiener Ton (Du-Form)
- **Masculine-Luxury-Design**: dunkles UI, Gold/Bronze-Akzente, Gradients, Glas, weiche Schatten, Scroll-Animationen
- **5 art-direktierte Themes** mit Live-Switcher (Demo): Midnight Gold, Espresso Steel, Vienna Bronze, Graphite Luxe, Royal Burgundy
- **Mobile-First** mit persistenter Buchungs-Leiste, Tap-to-Call/Map
- **12 Sektionen**: Hero, Über uns, Services & Preise, Team, Buchung, Galerie, Bewertungen, Instagram, Öffnungszeiten, Standort/Kontakt, FAQ, Footer
- **Buchungsformular** (UI-only, anbindbar an Fresha/Treatwell/Salonkee/Calendly)
- **SEO**: Metadata-API, `HairSalon` JSON-LD, OG/Twitter-Cards, OG-Vorschaubild, `robots.txt`, `sitemap.xml`, semantisches HTML, lazy Images
- Impressum-/Datenschutz-Platzhalter (in Österreich gesetzlich verpflichtend)

## 🧱 Tech-Stack

- [Next.js 14](https://nextjs.org/) (App Router) · [TypeScript](https://www.typescriptlang.org/) · [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) mit CSS-Variablen-Theme-Tokens
- Keine Backend-Abhängigkeiten – statisch deploybar (Vercel)

## 📁 Architektur

```
viennabarber/
├── app/
│   ├── layout.tsx          # Metadaten, Fonts, JSON-LD, Default-Theme, <html lang="de">
│   ├── page.tsx            # Seitenkomposition (Server Component)
│   ├── globals.css         # Tailwind + 5 Theme-Paletten (CSS-Variablen)
│   ├── opengraph-image.tsx # Link-Vorschaubild (1200×630)
│   ├── robots.ts           # /robots.txt
│   └── sitemap.ts          # /sitemap.xml
├── src/
│   ├── components/         # Hero, Services, Team, Booking, ThemeSwitcher … (Server + 'use client')
│   └── content/            # services, team, reviews, gallery, faq, hours, site, themes
├── docs/                   # Recherche, Produkt-Spec, Naming, SEO, Sales
├── public/                 # favicon
├── tailwind.config.js      # Design-Tokens (base/surface/ink/accent …)
└── next.config.mjs
```

Server vs. Client: Sektionen ohne Interaktion sind **Server Components** (weniger JS). Interaktive Teile
(`Navbar`, `Booking`, `Faq`, `Hours`, `Footer`, `ThemeSwitcher`, `Reveal`, `StickyBookBar`) tragen `'use client'`.

## 🚀 Lokal starten

Voraussetzung: Node.js ≥ 18.

```bash
npm install
npm run dev      # http://localhost:3000
```

Weitere Befehle:

```bash
npm run build      # Produktions-Build
npm run start      # Build lokal servieren
npm run typecheck  # TypeScript ohne Emit
npm run lint       # next lint
```

## ☁️ Deployment (Vercel)

**Git-Integration (empfohlen):**
1. Repo in Vercel importieren → Framework wird automatisch als *Next.js* erkannt.
2. Keine Sonderkonfiguration nötig.
3. Production-Domain `viennabarber.mabasian.dev` unter *Settings → Domains* hinzufügen.

**CLI:**
```bash
npm i -g vercel
vercel link
vercel --prod
vercel domains add viennabarber.mabasian.dev
```

**DNS für `viennabarber.mabasian.dev`** (Registrar von `mabasian.dev`):

| Typ   | Name           | Wert                   |
|-------|----------------|------------------------|
| CNAME | `viennabarber` | `cname.vercel-dns.com` |

Danach in Vercel verifizieren.

## 🎨 Anpassen pro Kunde (Re-Skin)

- **Inhalte:** `src/content/*` (Services & Preise, Team, Reviews, Galerie, FAQ, Öffnungszeiten, Stammdaten)
- **Branding/Themes:** Farbpaletten in `app/globals.css` (`[data-theme]`), Tokens in `tailwind.config.js`, Fonts in `app/layout.tsx`
- **SEO:** Metadaten & JSON-LD in `app/layout.tsx`, Domain in `app/robots.ts` & `app/sitemap.ts`
- **Buchung:** `src/components/Booking.tsx` an ein Buchungstool anbinden

### Themes & Switcher

- 5 Themes als CSS-Variablen in `app/globals.css`.
- **ThemeSwitcher entfernen für die Kunden-Version:** Datei `src/components/ThemeSwitcher.tsx` löschen, Import + `<ThemeSwitcher />` aus `app/page.tsx` entfernen, gewünschtes Theme fix via `data-theme="…"` am `<html>` in `app/layout.tsx` setzen.

## 💼 Verkauf

Strategie, Preise & Outreach-Vorlagen: [`docs/sales-strategy.md`](docs/sales-strategy.md).
Konzept & Positionierung: [`docs/product-spec.md`](docs/product-spec.md). SEO-Plan: [`docs/seo-strategy.md`](docs/seo-strategy.md).

## 📌 Hinweise

- Empfohlene Subdomain: **viennabarber.mabasian.dev**
- Demo-Inhalte (Adresse, Telefon, Impressum, Fotos) sind Platzhalter und vor Live-Gang zu ersetzen.
- Buchungs-/Kontaktformulare sind bewusst Frontend-only.

---

Website-Demo für Barbershops in Wien **by [Mohammadreza Abbasian](https://mabasian.dev)**.
