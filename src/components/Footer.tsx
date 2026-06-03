'use client'

import { useState } from 'react'
import { site } from '../content/site'
import { InstagramIcon, TikTokIcon, ScissorsIcon } from './icons'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#buchung', label: 'Termin buchen' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#oeffnungszeiten', label: 'Öffnungszeiten' },
  { href: '#faq', label: 'FAQ' },
]

const year = new Date().getFullYear()

export function Footer() {
  const [legal, setLegal] = useState<null | 'impressum' | 'datenschutz'>(null)

  return (
    <footer className="border-t border-line bg-base">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-display text-3xl uppercase tracking-wide text-ink">
              Vienna<span className="text-gradient-accent">Barber</span>
            </span>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <ScissorsIcon className="h-4 w-4 text-accent" /> {site.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Navigation</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.contact.phoneHref} className="text-muted transition-colors hover:text-accent">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-muted transition-colors hover:text-accent">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Social</h3>
            <div className="mt-4 flex gap-3">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button type="button" onClick={() => setLegal('impressum')} className="transition-colors hover:text-ink">
              Impressum
            </button>
            <button type="button" onClick={() => setLegal('datenschutz')} className="transition-colors hover:text-ink">
              Datenschutz
            </button>
            <span>© {year} {site.name}</span>
          </div>
          <p>
            Website-Demo für Barbershops in Wien by{' '}
            <a
              href="https://mabasian.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink/80 underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              Mabasian (Reza)
            </a>
          </p>
        </div>
      </div>

      {legal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-base/80 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegal(null)}
        >
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-surface p-7 shadow-card" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-2xl uppercase tracking-wide text-ink">
                {legal === 'impressum' ? 'Impressum' : 'Datenschutz'}
              </h2>
              <button type="button" onClick={() => setLegal(null)} aria-label="Schließen" className="text-2xl leading-none text-muted hover:text-ink">
                ×
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p className="rounded-lg border border-accent/30 bg-accent/10 p-3 text-ink">
                Platzhalter – im Kundenprojekt durch die rechtlich korrekten Angaben ersetzen (in
                Österreich gesetzlich verpflichtend).
              </p>
              {legal === 'impressum' ? (
                <>
                  <p>
                    <strong className="text-ink">{site.name}</strong>
                    <br />
                    Musterbetrieb e.U.
                    <br />
                    {site.address.street}, {site.address.zip} {site.address.city}, {site.address.country}
                  </p>
                  <p>
                    Telefon: {site.contact.phone}
                    <br />
                    E-Mail: {site.contact.email}
                  </p>
                  <p>
                    Firmenbuchnummer: FN 000000a · Firmenbuchgericht: Handelsgericht Wien
                    <br />
                    UID: ATU00000000 · Mitglied der WKO Wien
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Der Schutz deiner Daten ist uns wichtig. Diese Website ist eine Demo; das
                    Buchungsformular speichert oder übermittelt keine Daten.
                  </p>
                  <p>
                    In der Live-Version werden eingegebene Daten ausschließlich zur Bearbeitung
                    deiner Terminanfrage verwendet und nicht an Dritte weitergegeben. Es gelten die
                    Bestimmungen der DSGVO.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
