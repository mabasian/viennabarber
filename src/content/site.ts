// Zentrale Stammdaten – pro Kunde hier anpassen.
export const site = {
  name: 'ViennaBarber',
  tagline: 'Handwerk trifft Stil.',
  hero: {
    line1: 'Dein bester',
    line2: 'Schnitt in Wien',
    sub: 'Premium Barbier im 1. Bezirk. Präzise Schnitte, klassische Nassrasur und Bartpflege auf höchstem Niveau – in einer Atmosphäre, in der du wirklich abschaltest.',
  },
  address: {
    street: 'Bäckerstraße 8',
    zip: '1010',
    city: 'Wien',
    country: 'Österreich',
  },
  contact: {
    phone: '+43 1 535 20 80',
    phoneHref: 'tel:+4315352080',
    email: 'servus@viennabarber.at',
  },
  social: {
    instagram: 'https://instagram.com',
    instagramHandle: '@viennabarber',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
  transit: 'U1/U3 Stephansplatz · U3 Stubentor · Bim 2 Weihburggasse',
  mapsQuery: 'Bäckerstraße 8, 1010 Wien',
  foundedYear: 2016,
} as const
