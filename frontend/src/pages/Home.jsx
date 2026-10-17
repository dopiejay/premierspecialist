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
      <CtaBand eyebrow="Appointments" title="Book a specialist consultation" text="Send us an appointment request and our reception team will contact you to confirm a time. Please book ahead — walk-in care is not available." alt="Premier Specialist Clinic consultation" />
      <Insurance />
    </>
  )
}
