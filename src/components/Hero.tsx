import { site } from '../content/site'
import { ratingSummary } from '../content/reviews'
import { StarIcon, ArrowRightIcon, ScissorsIcon } from './icons'

const heroImg =
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=75'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="container-wide grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* Text */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <ScissorsIcon className="h-4 w-4" /> Barbershop · 1. Bezirk · Wien
          </span>
          <h1 className="h-display text-6xl text-ink sm:text-7xl md:text-8xl">
            {site.hero.line1}
            <br />
            <span className="text-gradient-accent animate-shine">{site.hero.line2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#buchung" className="btn-primary">
              Termin buchen <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Services ansehen
            </a>
          </div>

          {/* Trust-Leiste */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm text-muted">
                <span className="font-semibold text-ink">{ratingSummary.average}</span> · {ratingSummary.count}+ Bewertungen
              </span>
            </div>
            <div className="text-sm text-muted">
              <span className="font-semibold text-ink">Seit {site.foundedYear}</span> in Wien
            </div>
          </div>
        </div>

        {/* Bild */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-card">
            <img
              src={heroImg}
              alt="Premium Herrenhaarschnitt bei ViennaBarber"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent" />
          </div>

          {/* Glas-Karte */}
          <div className="glass absolute -bottom-5 left-5 right-5 rounded-2xl p-4 sm:left-auto sm:right-6 sm:w-64">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Heute frei</p>
            <p className="mt-1 text-sm text-ink">
              Spontane Termine noch verfügbar – jetzt online sichern.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
