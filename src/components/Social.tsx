import { Reveal } from './Reveal'
import { site } from '../content/site'
import { gallery } from '../content/gallery'
import { InstagramIcon } from './icons'

// Instagram-Style-Vorschau (Demo). Pro Kunde mit echtem Feed/Plugin verbinden.
const posts = gallery.slice(0, 6)

export function Social() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface text-accent">
                <InstagramIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-2xl uppercase tracking-wide text-ink">
                  {site.social.instagramHandle}
                </p>
                <p className="text-sm text-muted">Folge uns für tägliche Inspiration & Vorher/Nachher</p>
              </div>
            </div>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Folgen
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal key={post.src} delay={(i % 6) * 60}>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl border border-line"
                aria-label="Instagram-Beitrag ansehen"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-base/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="h-7 w-7 text-ink" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
