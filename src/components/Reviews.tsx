import { Reveal } from './Reveal'
import { reviews, ratingSummary } from '../content/reviews'
import { StarIcon } from './icons'

export function Reviews() {
  return (
    <section id="bewertungen" className="section-pad bg-surface/40">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Bewertungen</span>
          <h2 className="section-title">
            Was unsere <span className="text-gradient-accent">Kunden</span> sagen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
            <span className="ml-2 text-sm text-muted">
              <span className="font-semibold text-ink">{ratingSummary.average}</span> von 5 ·{' '}
              {ratingSummary.count}+ Google-Bewertungen
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.author} review={r} delay={i * 90} />
          ))}
          {reviews.slice(3).map((r, i) => (
            <ReviewCard key={r.author} review={r} delay={i * 90} className="lg:col-span-1 md:col-span-1" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({
  review,
  delay,
  className = '',
}: {
  review: (typeof reviews)[number]
  delay: number
  className?: string
}) {
  return (
    <Reveal delay={delay} className={className}>
      <figure className="card h-full p-6">
        <div className="flex gap-1 text-accent">
          {Array.from({ length: review.rating }).map((_, s) => (
            <StarIcon key={s} className="h-4 w-4" />
          ))}
        </div>
        <blockquote className="mt-4 text-base leading-relaxed text-ink/90">
          {`„${review.quote}“`}
        </blockquote>
        <figcaption className="mt-5 text-sm">
          <span className="font-semibold text-ink">{review.author}</span>
          <span className="text-muted"> · {review.context}</span>
        </figcaption>
      </figure>
    </Reveal>
  )
}
