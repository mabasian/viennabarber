import { Reveal } from './Reveal'
import { site } from '../content/site'
import { PinIcon, PhoneIcon, MailIcon } from './icons'

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`

export function Location() {
  return (
    <section id="kontakt" className="section-pad">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Standort & Kontakt</span>
          <h2 className="section-title">
            So findest du <span className="text-gradient-accent">uns</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Mitten im 1. Bezirk, wenige Schritte vom Stephansplatz. Bestens mit den Öffis erreichbar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Karten-Card */}
          <Reveal className="lg:col-span-3">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-72 overflow-hidden rounded-2xl border border-line shadow-card sm:h-96 lg:h-full"
              aria-label="Auf Google Maps öffnen"
            >
              <div className="absolute inset-0 bg-surface" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgb(var(--border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)',
                  backgroundSize: '46px 46px',
                }}
              />
              <div className="absolute left-1/3 top-0 h-full w-7 -rotate-12 bg-accent/10" />
              <div className="absolute left-0 top-1/2 h-8 w-full bg-accent/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <PinIcon className="h-7 w-7" />
                </span>
                <span className="mt-3 rounded-full border border-line bg-base/80 px-4 py-1.5 text-sm font-semibold text-ink backdrop-blur">
                  {site.address.street}, {site.address.zip} {site.address.city}
                </span>
                <span className="mt-2 text-xs uppercase tracking-wider text-muted">
                  Auf Google Maps öffnen →
                </span>
              </div>
            </a>
          </Reveal>

          {/* Kontakt-Karten */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <ContactRow icon={<PinIcon className="h-5 w-5" />} label="Adresse" value={`${site.address.street}, ${site.address.zip} ${site.address.city}`} href={mapsLink} />
              <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="Telefon" value={site.contact.phone} href={site.contact.phoneHref} />
              <ContactRow icon={<MailIcon className="h-5 w-5" />} label="E-Mail" value={site.contact.email} href={`mailto:${site.contact.email}`} />
              <div className="card flex-1 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Anreise</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{site.transit}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="card group flex items-center gap-4 p-5 transition-colors hover:border-accent"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-base/60 text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
        <span className="block text-sm font-medium text-ink">{value}</span>
      </span>
    </a>
  )
}
