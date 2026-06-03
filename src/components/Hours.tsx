'use client'

import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'
import { openingHours } from '../content/hours'
import { ClockIcon } from './icons'

type Status = { open: boolean; todayWeekday: number } | null

function computeStatus(): Status {
  const now = new Date()
  const day = now.getDay()
  const today = openingHours.find((d) => d.weekday === day)
  if (!today || today.closed) return { open: false, todayWeekday: day }
  const minutes = now.getHours() * 60 + now.getMinutes()
  const [oh, om] = today.open.split(':').map(Number)
  const [ch, cm] = today.close.split(':').map(Number)
  const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm
  return { open, todayWeekday: day }
}

export function Hours() {
  // Erst nach Mount berechnen → keine Hydration-Diskrepanz (Statische Seite).
  const [status, setStatus] = useState<Status>(null)
  useEffect(() => setStatus(computeStatus()), [])

  return (
    <section id="oeffnungszeiten" className="section-pad bg-surface/40">
      <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow">Öffnungszeiten</span>
            <h2 className="section-title">
              Wann wir für dich <span className="text-gradient-accent">da sind</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Termine empfohlen – Walk-ins willkommen, solange ein Stuhl frei ist. Donnerstag und
              Freitag haben wir für dich länger geöffnet.
            </p>

            {status && (
              <div
                className={`mt-7 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold ${
                  status.open ? 'bg-accent/15 text-accent' : 'border border-line text-muted'
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${status.open ? 'bg-accent' : 'bg-muted/50'}`} aria-hidden />
                {status.open ? 'Jetzt geöffnet' : 'Gerade geschlossen'}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Wochenübersicht</span>
            </div>
            <ul className="divide-y divide-line/60">
              {openingHours.map((day) => {
                const isToday = status?.todayWeekday === day.weekday
                return (
                  <li
                    key={day.weekday}
                    className={`flex items-center justify-between py-3 ${
                      isToday ? 'font-semibold text-ink' : 'text-muted'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {day.label}
                      {isToday && (
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                          Heute
                        </span>
                      )}
                    </span>
                    <span>{day.closed ? 'Geschlossen' : `${day.open} – ${day.close} Uhr`}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
