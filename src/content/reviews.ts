export type Review = {
  quote: string
  author: string
  context: string
  rating: number
}

export const reviews: Review[] = [
  {
    quote:
      'Bester Barber in Wien, ganz ehrlich. Marco nimmt sich Zeit, hört zu und der Fade sitzt jedes Mal perfekt. Termin ist Pflicht – aus gutem Grund.',
    author: 'Stefan K.',
    context: 'Google-Bewertung',
    rating: 5,
  },
  {
    quote:
      'Die Hot Towel Rasur ist ein Erlebnis für sich. Stilvolles Ambiente, guter Espresso und man geht raus wie neu. Absolute Empfehlung.',
    author: 'Florian W.',
    context: 'Google-Bewertung',
    rating: 5,
  },
  {
    quote:
      'Endlich ein Barbier, der versteht, was man will. Deniz hat aus meinem Curly Hair das Beste rausgeholt. Komme nicht mehr woanders hin.',
    author: 'Amar S.',
    context: 'Stammkunde',
    rating: 5,
  },
  {
    quote:
      'Top Beratung, faire Preise für die Qualität und ein richtig cooles Team. Die Online-Buchung ist in 30 Sekunden erledigt.',
    author: 'Thomas L.',
    context: 'Google-Bewertung',
    rating: 5,
  },
  {
    quote:
      'War zum Premium Paket vor meiner Hochzeit – perfekt vorbereitet, entspannt und das Ergebnis hat alle umgehauen. Danke an das ganze Team!',
    author: 'Niklas P.',
    context: 'Google-Bewertung',
    rating: 5,
  },
]

export const ratingSummary = { average: '4,9', count: 480 }
