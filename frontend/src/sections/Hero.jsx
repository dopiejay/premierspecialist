import { ArrowRight } from 'lucide-react'
import Photo from '../components/Photo'
import Button from '../components/Button'
import { P } from '../data/site'

const FACTS = [
  ['Outpatient', 'Internal medicine & consultations'],
  ['Maternity', 'Women’s health & antenatal care'],
  ['Diagnostics', 'Laboratory & investigations'],
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      <Photo id={P.hero} alt="Shifa Hospital care team with a patient" w={1600} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/45 to-charcoal/10" />
      <div className="relative w-full max-w-7xl mx-auto px-5 pt-36 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-white/70">
          Private hospital · Blantyre CBD
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-white">
          Compassionate care.<br /><span className="text-white/55">Trusted expertise.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Quality healthcare for individuals and families — delivered with professionalism, respect and clarity.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/services" variant="light" className="group">Explore services <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></Button>
          <Button to="/book" variant="ghostLight">Book an appointment</Button>
        </div>
        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
          {FACTS.map(([t, d]) => (
            <div key={t} className="sm:px-6 sm:first:pl-0">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="mt-1 text-sm text-white/55">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
