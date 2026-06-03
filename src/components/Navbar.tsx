'use client'

import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { MenuIcon, CloseIcon } from './icons'

const links = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#oeffnungszeiten', label: 'Öffnungszeiten' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line/70 bg-base/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between md:h-20">
        <a href="#hero" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <span className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">
            Vienna<span className="text-gradient-accent">Barber</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#buchung" className="btn-primary hidden sm:inline-flex">
            Termin buchen
          </a>
          <button
            type="button"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line/70 bg-base/95 backdrop-blur-xl lg:hidden">
          <ul className="container-wide flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink/90 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href="#buchung" onClick={() => setOpen(false)} className="btn-primary w-full">
                Termin buchen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
