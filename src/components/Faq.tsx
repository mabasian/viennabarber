'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { faq } from '../content/faq'
import { ChevronDownIcon } from './icons'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-surface/40">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">FAQ</span>
          <h2 className="section-title">
            Häufige <span className="text-gradient-accent">Fragen</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Du hast eine Frage, die hier nicht beantwortet wird? Ruf uns an oder schreib uns auf
            Instagram – wir helfen gern.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink">{item.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
