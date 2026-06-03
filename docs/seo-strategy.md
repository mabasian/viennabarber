# SEO-Strategie: ViennaBarber

> Lokale Sichtbarkeit ist für Barbershops der wichtigste Wachstumshebel. Dieses Dokument beschreibt die technische, lokale und conversion-orientierte SEO.

## 1. Was bereits im Template umgesetzt ist

- **Next.js App Router**: serverseitig gerendertes, statisch vorgerendertes HTML → Inhalte sind sofort crawlbar.
- **Metadata-API** in `app/layout.tsx`: optimierte deutsche `title`/`description`, Keywords, Canonical, `lang="de"`, `de_AT` Locale.
- **Open Graph & Twitter Cards** + generiertes Vorschaubild (`app/opengraph-image.tsx`, 1200×630) → schöne Link-Previews auf WhatsApp/Social.
- **Structured Data (JSON-LD)**: Typ `HairSalon` mit NAP, Geo, Öffnungszeiten, Preisspanne, Zahlungsarten, `aggregateRating`, `sameAs` (Social).
- **robots.txt** (`app/robots.ts`) und **sitemap.xml** (`app/sitemap.ts`).
- **Semantisches HTML**: `header/main/section/footer`, eine `h1`, saubere `h2/h3`-Hierarchie, `aria`-Labels, Alt-Texte.
- **Performance/CWV**: statisches Prerendering, `loading="lazy"` für Bilder, `fetchPriority="high"` fürs Hero-Bild, schlankes JS-Bundle, `next/image`-fähige Remote-Patterns.

## 2. Lokale SEO-Strategie

1. **Google Unternehmensprofil (GBP)** vollständig pflegen: korrekte Kategorie („Friseur"/„Barbershop"), Adresse, Öffnungszeiten, Telefon, Website-Link, viele echte Fotos, Beiträge, Q&A.
2. **NAP-Konsistenz** (Name, Adresse, Telefon) identisch auf Website, GBP, Instagram, Branchenverzeichnissen (Herold, FindeOffen, Yelp, TripAdvisor).
3. **Bewertungen aktiv sammeln** (QR-Code im Shop, nach dem Termin um Google-Bewertung bitten) und auf der Website spiegeln.
4. **Lokale Keywords** im Text & in Überschriften platzieren (Bezirk/Grätzl, U-Bahn-Bezug).
5. **Backlinks** lokal: Wiener Lifestyle-Blogs, Grätzl-Magazine, Kooperationen, Branchenportale.

## 3. Keyword-Set (Deutsch, Wien)

**Primär:** Barbershop Wien · Barber Wien · Herrenfriseur Wien · Herrenhaarschnitt Wien · Fade Cut Wien · Bartpflege Wien · Nassrasur Wien.
**Lokal/Long-Tail:** Barber Wien 1010 · Barber 1. Bezirk · Barbershop in der Nähe · bester Barber Wien · Skin Fade Wien · Männerfriseur Wien Termin · Barber Stephansplatz · Hot Towel Shave Wien · Grooming Hochzeit Wien.
**Mapping:** Primärkeywords → `title`/`h1`/Hero & Services; Long-Tail → FAQ, Service-Beschreibungen, About.

## 4. Google-Maps-Optimierung

- Richtige Primär- & Sekundärkategorien, Leistungen & Attribute (Termin nötig, barrierefrei, Karte/Apple Pay) im GBP setzen.
- Geokoordinaten im JSON-LD entsprechen dem GBP-Pin.
- Wöchentlich GBP-Beiträge (Aktionen, neue Styles), regelmäßig Fotos.
- Auf Bewertungen antworten (Signal für Aktivität & Relevanz).
- Einheitliche Öffnungszeiten Website ↔ GBP ↔ Schema.

## 5. Conversion-SEO

- Suchintention „Barber + buchen" direkt bedienen: prominenter „Termin buchen"-CTA above the fold und nach jeder Sektion.
- Schnelle Ladezeit & Mobile-First senken Absprünge → besseres Ranking + mehr Buchungen.
- Sterne/Anzahl Bewertungen früh = höhere CTR aus den Suchergebnissen und mehr Vertrauen.
- FAQ beantwortet Suchanfragen (Storno, Zahlung, Wunsch-Barber) → mögliche Rich Results & weniger Reibung.

## 6. Pflege/laufend

- `sitemap.ts` `lastModified` bei Updates anpassen.
- Saisonale Landing-Inhalte (z. B. „Grooming für die Hochzeitssaison").
- Monatlich GBP-Insights & Search-Console prüfen (Impressionen, Klicks, Top-Queries).

## 7. Mess-Setup (empfohlen)

Google Search Console + GBP Insights + (datenschutzkonform) Plausible/GA4. KPIs: lokale Impressionen, „Wegbeschreibung"-Klicks, Anrufe, Website-Klicks aus GBP, Buchungs-Conversions.
