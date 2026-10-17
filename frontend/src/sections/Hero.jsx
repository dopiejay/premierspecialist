import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      <img src="/images/hero.jpg" alt="Premier Specialist Clinic care team with a patient" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/15" />
      <div className="relative w-full max-w-7xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-white/70">
          Specialist clinic · Blantyre
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-white">
          Specialist care.<br /><span className="text-yellow">With your wellbeing at heart.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
          Explore our medical services and find the information you need to plan your visit.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/services" variant="light" className="group">Explore services <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></Button>
          <Button to="/book" variant="ghostLight">Book an appointment</Button>
        </div>
      </div>
    </section>
  )
}
