# Produkt-Spezifikation: ViennaBarber

> Premium, deutschsprachiges, verkaufsfertiges Website-Template für moderne Wiener Barbershops.
> Basierend auf `vienna-barber-research.md`.

## 1. Demo-Konzept

**ViennaBarber** ist die fiktive, aber glaubwürdige Marke eines **Premium-Barbershops im 1. Bezirk** (Bäckerstraße 8, 1010 Wien). Positionierung: *modern-luxury* – dunkel, edel, jung, clean. Claim: **„Handwerk trifft Stil."** / Hero: **„Dein bester Schnitt in Wien."**

Bewusst generisch genug, um in Minuten auf einen echten Shop umgefärbt zu werden, und spezifisch genug, um real zu wirken.

## 2. Zielkunde (B2B – wer kauft das Template)

Inhaber moderner Wiener Barbershops (1–3 Standorte), Neueröffnungen, sowie Shops mit starkem Instagram aber schwacher/fehlender Website. Pain: keine Online-Buchung, schlechte Mobile-Optik, schwache Google-Sichtbarkeit, keine Zeit/Budget für Agentur (€ 3.000–8.000).

**Endnutzer (Website-Besucher):** Männer 20–50, mobil, suchen spontan „Barber in der Nähe", wollen schnell Preise sehen und buchen.

## 3. Branding-Direction

Maskulin, luxuriös, modern, minimal, urban. Dunkles UI als Standard (Midnight Gold). Kondensierte Display-Versalien (Bebas Neue) + Inter. Gold/Bronze/Stahl-Akzente, feine Linien, Glow & Glas, viel Negativraum, foto-getrieben.

## 4. Visuelle Identität

- **Logo/Wortmarke:** „Vienna**Barber**" mit Gradient-Akzent auf „Barber".
- **Farben:** 5 art-direktierte Themes (siehe Theme-System). Default *Midnight Gold* (#0B0D12 / Gold #C9A227).
- **Typo:** Display Bebas Neue (Versal), Body Inter.
- **Bildsprache:** dunkle, edle Barber-Fotografie, Vorher/Nachher, Detailaufnahmen.

## 5. UX-Direction

One-Pager mit Sticky-Nav + Anker, Sticky-Buchungs-CTA (mobil eigene Leiste), Scroll-Reveal-Animationen, Tap-to-Call/Map, Akkordeon-FAQ, Theme-Switcher (Demo).

## 6. Conversion-Ziele

**Primär:** Online-Terminbuchung. **Sekundär:** Anruf, Instagram folgen, Route. Hebel: CTA-Wiederholung, sozialer Beweis (4,9 ★), Verfügbarkeits-Hinweis, transparente Preise, FAQ gegen Einwände.

## 7. Buchungs-Strategie

Frontend-Buchungsformular (Service + Barber + Datum/Zeit + Kontakt) als Demo. Live anbindbar an **Fresha / Treatwell / Salonkee / Calendly / Shore** oder Formspree. Wunsch-Barber-Auswahl als Personal-Branding-Hebel.

## 8. Seitenstruktur

Hero · Über uns · Services & Preise · Team · Buchung · Galerie · Bewertungen · Instagram · Öffnungszeiten · Standort/Kontakt · FAQ · Footer.

## 9. SEO-Strategie (Kurzfassung)

Server-gerendertes HTML (Next.js), Metadata-API, `HairSalon` JSON-LD, OG/Twitter-Cards, robots.txt, sitemap.xml, semantische Heading-Hierarchie, lokale Keywords, schnelle Core Web Vitals. Details: `seo-strategy.md`.

## 10. Monetarisierungs-Angle (für dich als Verkäufer)

Einmal-Setup + optionales Wartungs-Abo (wiederkehrender Umsatz). Upsells: eigene Domain, Foto-Shooting-Vermittlung, Buchungstool-Integration, Google-Profil-Optimierung, Mehrsprachigkeit, Meta/Google-Ads-Betreuung.

## 11. Customization-Optionen (Re-Skin pro Kunde)

- **Inhalte:** `src/content/*` (Services, Team, Reviews, Galerie, FAQ, Öffnungszeiten, Stammdaten).
- **Branding:** Theme-Tokens in `app/globals.css` + `tailwind.config.js`; Fonts in `app/layout.tsx`.
- **SEO:** Metadaten & JSON-LD in `app/layout.tsx`, Domain in robots/sitemap.
- **Buchung:** `src/components/Booking.tsx` an Tool anbinden.
- Module ein-/ausblendbar (z. B. Instagram, Team).

## 12. Preis-Vorschlag (Verkauf)

| Paket | Inhalt | Preis (einmalig) |
|---|---|---|
| **Starter** | Template eingerichtet, Inhalte eingepflegt, auf Subdomain | **€ 590** |
| **Professional** | + eigene Domain, Buchungstool angebunden, Google-Profil-Setup, SEO-Basis, Foto-Feinschliff | **€ 990** |
| **Premium** | + individuelles Branding, mehr Seiten, Foto-Kuration, Ads-Setup | **€ 1.690** |
| **Care-Abo** | Hosting, Updates, kleine Änderungen, Support | **€ 29–49 / Monat** |

Deutlich unter Agenturpreisen → No-Brainer; Care-Abo = wiederkehrender Umsatz.

## 13. Kaltakquise-Angle

Sichtbarer Mangel + fertige Demo: „Ihr habt einen starken Instagram-Auftritt, aber online kann man bei euch nicht buchen und die Seite ist am Handy schwer lesbar. Schaut euch das an: viennabarber.mabasian.dev – so etwas mache ich euch mit eurem Branding." Details: `sales-strategy.md`.

## 14. Mobile-First-Strategie

Design ab 360px, Sticky-Buchungsleiste mobil, Tap-to-Call/Map, große Touch-Targets, lazy/optimierte Bilder, < 2,5 s LCP, statisch vorgerendert.

## 15. Local-SEO-Strategie (Kurz)

`HairSalon`-Schema mit NAP, Geo, Öffnungszeiten, Rating; konsistente NAP über Website/Google/Instagram; Bezirksbezug im Text; gepflegtes Google-Unternehmensprofil mit Fotos & Bewertungen. Voll ausgeführt in `seo-strategy.md`.
