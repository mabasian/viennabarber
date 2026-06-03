import { Navbar } from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'
import { About } from '../src/components/About'
import { Services } from '../src/components/Services'
import { Team } from '../src/components/Team'
import { Booking } from '../src/components/Booking'
import { Gallery } from '../src/components/Gallery'
import { Reviews } from '../src/components/Reviews'
import { Social } from '../src/components/Social'
import { Hours } from '../src/components/Hours'
import { Location } from '../src/components/Location'
import { Faq } from '../src/components/Faq'
import { Footer } from '../src/components/Footer'
import { StickyBookBar } from '../src/components/StickyBookBar'
// ▼ DEMO-WERKZEUG – für die Kunden-Version entfernen (siehe Datei-Header in ThemeSwitcher.tsx)
import { ThemeSwitcher } from '../src/components/ThemeSwitcher'
// ▲ DEMO-WERKZEUG

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Booking />
        <Gallery />
        <Reviews />
        <Social />
        <Hours />
        <Location />
        <Faq />
      </main>
      <Footer />
      <StickyBookBar />
      {/* ▼ DEMO-WERKZEUG – für die Kunden-Version entfernen */}
      <ThemeSwitcher />
      {/* ▲ DEMO-WERKZEUG */}
    </>
  )
}
