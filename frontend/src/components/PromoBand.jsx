import { ArrowRight, Phone } from 'lucide-react'
import Button from './Button'
import { tel } from '../data/site'

export default function PromoBand({ eyebrow, title, text }) {
  return (
    <section className="bg-cyan">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <div className="lg:flex-1">
          <p className="text-xs font-extrabold tracking-[.2em] uppercase text-white/80">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
          <p className="mt-4 text-white/90 text-lg leading-relaxed max-w-2xl">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Button to="/book" variant="primary">Book an appointment <ArrowRight size={18} /></Button>
          <Button href={tel} variant="light"><Phone size={18} /> Call us</Button>
        </div>
      </div>
    </section>
  )
}
