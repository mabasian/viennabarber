'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'
import { services } from '../content/services'
import { team } from '../content/team'
import { site } from '../content/site'
import { CheckIcon, PhoneIcon, ScissorsIcon } from './icons'

const times = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']
const allServices = services.flatMap((g) => g.items.map((i) => i.name))

const perks = [
  'Kostenlose Beratung vor jedem Schnitt',
  'Wunsch-Barber frei wählbar',
  'Espresso oder Drink inklusive',
  'Flexible Stornierung bis 24 h vorher',
]

export function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo: keine Backend-Anbindung. Später an Treatwell/Calendly/Fresha/Formspree anbinden.
    setSubmitted(true)
  }

  return (
    <section id="buchung" className="section-pad bg-surface/40">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow">Termin buchen</span>
            <h2 className="section-title">
              Sichere dir deinen <span className="text-gradient-accent">Slot</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Wähle Service, Barber und Wunschzeit – in unter einer Minute. Wir bestätigen deinen
              Termin schnellstmöglich.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={site.contact.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-base/50 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <PhoneIcon className="h-5 w-5" /> {site.contact.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-ink">
                  Anfrage gesendet
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Das ist eine Demo-Buchung ohne echte Reservierung. In der Live-Version bestätigen
                  wir deinen Termin per SMS oder E-Mail.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-accent hover:brightness-110"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="mb-2 flex items-center gap-2 text-accent">
                  <ScissorsIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Online-Buchung</span>
                </div>

                <Field label="Service" htmlFor="b-service">
                  <select id="b-service" name="service" required defaultValue="" className="input">
                    <option value="" disabled>
                      Service wählen
                    </option>
                    {allServices.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Barber" htmlFor="b-barber">
                  <select id="b-barber" name="barber" defaultValue="egal" className="input">
                    <option value="egal">Egal / nächster frei</option>
                    {team.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Datum" htmlFor="b-date">
                    <input id="b-date" name="date" type="date" required className="input" />
                  </Field>
                  <Field label="Uhrzeit" htmlFor="b-time">
                    <select id="b-time" name="time" required defaultValue="" className="input">
                      <option value="" disabled>
                        Zeit wählen
                      </option>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t} Uhr
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" htmlFor="b-name">
                    <input id="b-name" name="name" type="text" required autoComplete="name" placeholder="Max Mustermann" className="input" />
                  </Field>
                  <Field label="Telefon" htmlFor="b-phone">
                    <input id="b-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+43 …" className="input" />
                  </Field>
                </div>

                <Field label="Anmerkung (optional)" htmlFor="b-note">
                  <textarea id="b-note" name="note" rows={2} placeholder="Wünsche, Vorlieben, Fragen …" className="input resize-none" />
                </Field>

                <button type="submit" className="btn-primary w-full">
                  Termin anfragen
                </button>
                <p className="text-center text-xs text-muted/70">
                  Demo-Formular – es werden keine Daten gespeichert oder gesendet.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
      {children}
    </label>
  )
}
