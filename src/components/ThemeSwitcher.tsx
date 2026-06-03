'use client'

/* =========================================================================
 *  DEMO-/PRÄSENTATIONS-WERKZEUG – NICHT TEIL DER KUNDEN-VERSION.
 *  Floating-Button zum Live-Wechsel zwischen den 5 Premium-Themes.
 *
 *  ▸ ENTFERNEN für die Auslieferung:
 *      1. Diese Datei löschen (src/components/ThemeSwitcher.tsx)
 *      2. Import & <ThemeSwitcher /> aus app/page.tsx entfernen
 *      3. Gewünschtes Theme fix via data-theme="…" am <html> in app/layout.tsx setzen
 *      (Die Themes selbst bleiben in app/globals.css.)
 * ========================================================================= */
import { useEffect, useState } from 'react'
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeId } from '../content/themes'
import { PaletteIcon, CloseIcon } from './icons'

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute('data-theme', id)
}

function getInitialTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null
    if (stored && themes.some((t) => t.id === stored)) return stored
  } catch {
    /* localStorage nicht verfügbar */
  }
  return DEFAULT_THEME
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ThemeId>(DEFAULT_THEME)

  useEffect(() => {
    const initial = getInitialTheme()
    setActive(initial)
    applyTheme(initial)
  }, [])

  const choose = (id: ThemeId) => {
    setActive(id)
    applyTheme(id)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id)
    } catch {
      /* ignorieren */
    }
  }

  return (
    <div className="fixed bottom-24 right-5 z-[70] print:hidden sm:bottom-5">
      {open && (
        <div
          role="dialog"
          aria-label="Theme-Auswahl (Demo)"
          className="mb-3 w-72 overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
        >
          <div className="flex items-center justify-between gap-2 border-b border-line bg-base/40 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">Theme-Vorschau</p>
              <p className="text-[11px] uppercase tracking-wide text-muted">Demo · nicht in der Live-Version</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Schließen" className="text-muted hover:text-ink">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <ul className="max-h-[60vh] overflow-y-auto p-2">
            {themes.map((theme) => {
              const isActive = theme.id === active
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    onClick={() => choose(theme.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      isActive ? 'bg-base ring-1 ring-accent/40' : 'hover:bg-base/60'
                    }`}
                  >
                    <span className="flex shrink-0 overflow-hidden rounded-full border border-line">
                      {theme.swatches.map((c) => (
                        <span key={c} className="h-7 w-3.5" style={{ backgroundColor: c }} aria-hidden />
                      ))}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink">{theme.name}</span>
                      <span className="block truncate text-xs text-muted">{theme.mood}</span>
                    </span>
                    {isActive && <span className="shrink-0 text-sm text-accent">✓</span>}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Theme-Auswahl schließen' : 'Theme-Auswahl öffnen (Demo)'}
        aria-expanded={open}
        className="group flex items-center gap-2 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm font-semibold text-ink shadow-card backdrop-blur transition-transform hover:scale-[1.03] active:scale-95"
      >
        <PaletteIcon className="h-5 w-5 text-accent" />
        <span className="hidden sm:inline">Theme</span>
        <span className="rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-ink">
          Demo
        </span>
      </button>
    </div>
  )
}
