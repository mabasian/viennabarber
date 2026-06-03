import { Reveal } from './Reveal'
import { gallery } from '../content/gallery'
import { site } from '../content/site'
import { InstagramIcon } from './icons'

export function Gallery() {
  return (
    <section id="galerie" className="section-pad">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Galerie</span>
          <h2 className="section-title">
            Unsere <span className="text-gradient-accent">Arbeit</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Ein Blick auf Schnitte, Fades und Bärte aus unserem Shop. Mehr davon täglich auf
            Instagram.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}
            >
              <div className="group relative h-full overflow-hidden rounded-xl border border-line">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-base/0 transition-colors duration-300 group-hover:bg-base/30" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <InstagramIcon className="h-4 w-4" /> {site.social.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
