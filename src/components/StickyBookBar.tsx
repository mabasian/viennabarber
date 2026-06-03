'use client'

import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { PhoneIcon } from './icons'

/** Persistente Buchungs-Leiste am unteren Rand – nur mobil, erscheint nach dem Hero. */
export function StickyBookBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-base/90 p-3 backdrop-blur-xl transition-transform duration-300 sm:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href={site.contact.phoneHref}
          aria-label="Anrufen"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <a href="#buchung" className="btn-primary flex-1">
          Termin buchen
        </a>
      </div>
    </div>
  )
}
