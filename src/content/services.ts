export type Service = {
  name: string
  description: string
  price: string
  duration: string
  popular?: boolean
}

export type ServiceGroup = {
  id: string
  title: string
  items: Service[]
}

// Realistische Wiener Premium-Barber-Preise (Stand 2026). Pro Kunde anpassbar.
export const services: ServiceGroup[] = [
  {
    id: 'haare',
    title: 'Haare',
    items: [
      {
        name: 'Herrenhaarschnitt',
        description: 'Klassischer Schnitt nach Beratung, Waschen, Föhnen & Styling.',
        price: '€ 39',
        duration: '45 Min.',
      },
      {
        name: 'Fade Cut',
        description: 'Sauber ausrasierter Übergang – vom Low bis High Fade.',
        price: '€ 45',
        duration: '50 Min.',
        popular: true,
      },
      {
        name: 'Skin Fade',
        description: 'Bis auf die Haut ausrasiert für den maximal cleanen Look.',
        price: '€ 49',
        duration: '55 Min.',
      },
      {
        name: 'Maschinenschnitt',
        description: 'Gleichmäßig auf eine Länge – schnell, sauber, unkompliziert.',
        price: '€ 25',
        duration: '25 Min.',
      },
    ],
  },
  {
    id: 'bart',
    title: 'Bart & Rasur',
    items: [
      {
        name: 'Bartpflege',
        description: 'Konturen schneiden, in Form bringen, Bartöl & Finish.',
        price: '€ 25',
        duration: '30 Min.',
      },
      {
        name: 'Klassische Nassrasur',
        description: 'Traditionelle Rasur mit heißem Handtuch und Rasiermesser.',
        price: '€ 35',
        duration: '40 Min.',
      },
      {
        name: 'Hot Towel Shave Deluxe',
        description: 'Nassrasur mit Pre-Shave, Hot Towel Ritual und Gesichtspflege.',
        price: '€ 45',
        duration: '50 Min.',
        popular: true,
      },
    ],
  },
  {
    id: 'pakete',
    title: 'Pakete',
    items: [
      {
        name: 'Schnitt & Bart',
        description: 'Haarschnitt plus Bartpflege – der Allrounder für den frischen Look.',
        price: '€ 59',
        duration: '70 Min.',
      },
      {
        name: 'Premium Paket',
        description: 'Schnitt, Bart, Hot Towel Service und Styling – das volle Programm.',
        price: '€ 89',
        duration: '90 Min.',
        popular: true,
      },
      {
        name: 'Deluxe Grooming',
        description: 'Schnitt, Bart, Nassrasur, Gesichtsbehandlung und ein Drink aufs Haus.',
        price: '€ 119',
        duration: '120 Min.',
      },
    ],
  },
]
