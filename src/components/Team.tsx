import { Reveal } from './Reveal'
import { team } from '../content/team'
import { InstagramIcon } from './icons'

export function Team() {
  return (
    <section id="team" className="section-pad">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Unser Team</span>
          <h2 className="section-title">
            Die <span className="text-gradient-accent">Barber</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Erfahrene Profis mit Auge fürs Detail. Jeder mit eigenem Stil – aber alle mit demselben
            Anspruch an Qualität.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((barber, i) => (
            <Reveal key={barber.name} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-2xl border border-line shadow-card">
                <img
                  src={barber.image}
                  alt={`${barber.name} – ${barber.role}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-ink">{barber.name}</h3>
                  <p className="text-sm font-medium text-accent">{barber.role}</p>
                  <p className="mt-1 text-xs text-muted">{barber.specialty}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
                    aria-label={`Instagram von ${barber.name}`}
                  >
                    <InstagramIcon className="h-4 w-4" /> {barber.instagram}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
