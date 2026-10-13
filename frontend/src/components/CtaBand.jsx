import { ArrowRight, Phone } from 'lucide-react'
import Photo from './Photo'
import Eyebrow from './Eyebrow'
import Button from './Button'
import { H, tel, P } from '../data/site'

export default function CtaBand({ eyebrow, title, text, photo = P.emergency, alt = '' }) {
  return (
    <section className="relative overflow-hidden bg-purple">
      <Photo id={photo} alt={alt} className="absolute inset-0 w-full h-full opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple via-purple/85 to-purple/40" />
      <div className="relative max-w-7xl mx-auto px-5 py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
        <div className="max-w-2xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
          <p className="mt-4 text-white/70 text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Button to="/book" variant="cyan">Book an appointment <ArrowRight size={18} /></Button>
          <Button href={tel} variant="ghostLight"><Phone size={18} /> {H.phone}</Button>
        </div>
      </div>
    </section>
  )
}
