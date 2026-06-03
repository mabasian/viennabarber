import { Reveal } from './Reveal'
import { services } from '../content/services'
import { ScissorsIcon, RazorIcon, StarIcon, ArrowRightIcon } from './icons'

const groupIcon: Record<string, typeof ScissorsIcon> = {
  haare: ScissorsIcon,
  bart: RazorIcon,
  pakete: StarIcon,
}

export function Services() {
  return (
    <section id="services" className="section-pad bg-surface/40">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Services & Preise</span>
          <h2 className="section-title">
            Unsere <span className="text-gradient-accent">Leistungen</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Transparente Preise, klare Leistungen. Alle Behandlungen inklusive Beratung, Waschen
            und Finish – ohne versteckte Kosten.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((group, gi) => {
            const Icon = groupIcon[group.id] ?? ScissorsIcon
            return (
              <Reveal key={group.id} delay={gi * 100}>
                <div className="card h-full p-6 sm:p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-base/60 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    {group.items.map((item) => (
                      <li key={item.name} className="border-b border-line/60 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="flex items-center gap-2 font-semibold text-ink">
                            {item.name}
                            {item.popular && (
                              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                                Beliebt
                              </span>
                            )}
                          </span>
                          <span className="whitespace-nowrap font-display text-xl text-gradient-accent">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-muted/70">{item.duration}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#buchung" className="btn-primary">
            Jetzt Termin buchen <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
