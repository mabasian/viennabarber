import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://viennabarber.mabasian.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ViennaBarber – Premium Barbershop in Wien | Haarschnitt, Fade & Bartpflege',
    template: '%s · ViennaBarber',
  },
  description:
    'ViennaBarber im 1. Bezirk: präzise Herrenhaarschnitte, Skin Fades, klassische Nassrasur und Bartpflege auf höchstem Niveau. Jetzt online Termin buchen.',
  keywords: [
    'Barbershop Wien',
    'Barber Wien',
    'Herrenhaarschnitt Wien',
    'Fade Cut Wien',
    'Bartpflege Wien',
    'Nassrasur Wien',
    'Friseur Wien 1010',
    'Barbier Wien 1. Bezirk',
  ],
  authors: [{ name: 'Mohammadreza Abbasian', url: 'https://mabasian.dev' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'ViennaBarber',
    title: 'ViennaBarber – Premium Barbershop in Wien',
    description:
      'Präzise Schnitte, Skin Fades, klassische Nassrasur & Bartpflege im 1. Bezirk. Jetzt online Termin buchen.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViennaBarber – Premium Barbershop in Wien',
    description: 'Präzise Schnitte, Skin Fades & Bartpflege im 1. Bezirk. Jetzt online Termin buchen.',
  },
}

// Lokales Business Structured Data (Rich Results / Google Maps).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': siteUrl,
  name: 'ViennaBarber',
  image: `${siteUrl}/opengraph-image`,
  url: siteUrl,
  telephone: '+43 1 535 20 80',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bargeld, Karte, Apple Pay, Google Pay',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bäckerstraße 8',
    addressLocality: 'Wien',
    postalCode: '1010',
    addressCountry: 'AT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.2089, longitude: 16.3776 },
  sameAs: ['https://instagram.com', 'https://facebook.com', 'https://tiktok.com'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '480' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-theme="midnight-gold">
      <head>
        <meta name="theme-color" content="#0B0D12" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
