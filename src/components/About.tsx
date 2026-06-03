import { Reveal } from './Reveal'

const aboutImg =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=75'

const stats = [
  { value: '8', label: 'Jahre Erfahrung' },
  { value: '15.000+', label: 'zufriedene Kunden' },
  { value: '4', label: 'Master Barber' },
]

export function About() {
  return (
    <section id="ueber-uns" className="section-pad">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-card">
              <img
                src={aboutImg}
                alt="Das Interieur des ViennaBarber Shops"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass absolute -right-4 bottom-8 hidden rounded-2xl px-6 py-4 sm:block">
              <p className="font-display text-3xl text-gradient-accent">Wien 1010</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Bäckerstraße 8</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="eyebrow">Über uns</span>
            <h2 className="section-title">
              Mehr als ein <span className="text-gradient-accent">Haarschnitt</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                ViennaBarber wurde 2016 mitten in der Wiener Innenstadt gegründet – mit einer klaren
                Idee: das ehrliche Handwerk des klassischen Barbiers zurückzubringen und mit modernem
                Stil zu verbinden.
              </p>
              <p>
                Bei uns bekommst du keinen Schnitt von der Stange. Wir nehmen uns Zeit, beraten dich
                ehrlich und arbeiten präzise – ob klassischer Herrenschnitt, sauberer Skin Fade oder
                die traditionelle Nassrasur mit heißem Handtuch.
              </p>
              <p>
                Dunkles Holz, gedämpftes Licht, ein guter Espresso und ein Team, das sein Handwerk
                liebt: Bei uns ist der Termin beim Barbier kein To-do, sondern eine Auszeit.
              </p>
            </div>

            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-gradient-accent sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
