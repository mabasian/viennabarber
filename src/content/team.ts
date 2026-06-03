export type Barber = {
  name: string
  role: string
  specialty: string
  image: string
  instagram: string
}

const portrait = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=750&q=70`

// Demo-Profile. Pro Kunde durch echte Fotos & Namen ersetzen.
export const team: Barber[] = [
  {
    name: 'Marco Berger',
    role: 'Inhaber & Master Barber',
    specialty: 'Klassische Schnitte & Nassrasur',
    image: portrait('photo-1503443207922-dff7d543fd0e'),
    instagram: '@marco.cuts',
  },
  {
    name: 'Deniz Yıldız',
    role: 'Senior Barber',
    specialty: 'Skin Fades & moderne Styles',
    image: portrait('photo-1500648767791-00dcc994a43e'),
    instagram: '@deniz.fades',
  },
  {
    name: 'Luca Moser',
    role: 'Barber & Bart-Spezialist',
    specialty: 'Bartdesign & Hot Towel Shaves',
    image: portrait('photo-1521119989659-a83eee488004'),
    instagram: '@luca.beards',
  },
  {
    name: 'Samir Haddad',
    role: 'Barber',
    specialty: 'Texturschnitte & Curly Hair',
    image: portrait('photo-1506794778202-cad84cf45f1d'),
    instagram: '@samir.studio',
  },
]
