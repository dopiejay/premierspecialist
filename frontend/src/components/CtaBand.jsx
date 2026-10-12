import { ArrowRight, Phone } from 'lucide-react'
import Photo from './Photo'
import Eyebrow from './Eyebrow'
import Button from './Button'
import { H, tel, P } from '../data/site'

export default function CtaBand({ eyebrow, title, text, photo = P.emergency, alt = '' }) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Photo id={photo} alt={alt} className="absolute inset-0 w-full h-full opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      <div className="relative max-w-3xl mx-auto px-5 py-24 text-center">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
        <p className="mt-4 text-white/70 text-lg">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/book">Book an appointment <ArrowRight size={18} /></Button>
          <Button href={tel} variant="ghostLight"><Phone size={18} /> {H.phone}</Button>
        </div>
      </div>
    </section>
  )
}
