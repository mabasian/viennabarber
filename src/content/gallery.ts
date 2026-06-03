export type GalleryImage = { src: string; alt: string }

const img = (id: string, w = 600, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`

// Demo-Bilder via Unsplash. Pro Kunde durch echte Arbeiten ersetzen.
export const gallery: GalleryImage[] = [
  { src: img('photo-1599351431202-1e0f0137899a'), alt: 'Frischer Fade Cut von der Seite' },
  { src: img('photo-1585747860715-2ba37e788b70'), alt: 'Barbier bei der Arbeit am Stuhl' },
  { src: img('photo-1605497788044-5a32c7078486'), alt: 'Präziser Haarschnitt mit der Schere' },
  { src: img('photo-1521490683712-35a1cb235a51'), alt: 'Klassische Bartpflege im Detail' },
  { src: img('photo-1622286342621-4bd786c2447c'), alt: 'Moderner Herrenschnitt mit Styling' },
  { src: img('photo-1593702288056-7927b442d0ea'), alt: 'Hot Towel Nassrasur' },
  { src: img('photo-1622296089863-eb7fc530daa8'), alt: 'Saubere Konturen am Nacken' },
  { src: img('photo-1635273051937-a0d9c0f8a8a4'), alt: 'Stylischer Look nach dem Schnitt' },
]
