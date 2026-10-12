import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import FeaturedServices from '../sections/FeaturedServices'
import CtaBand from '../components/CtaBand'
import Insurance from '../sections/Insurance'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedServices />
      <CtaBand eyebrow="Emergency & walk-in" title="Care when you need it most" text="Walk-in care and emergency arrangements are available every day. Call ahead to confirm hours, or come straight in." alt="Shifa Hospital emergency care" />
      <Insurance />
    </>
  )
}
