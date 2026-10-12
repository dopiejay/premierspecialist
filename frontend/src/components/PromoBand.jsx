import { ArrowRight, Phone } from 'lucide-react'
import Photo from './Photo'
import Eyebrow from './Eyebrow'
import Button from './Button'
import { tel } from '../data/site'

export default function PromoBand({ eyebrow, title, text, photo, alt = '', flip = false }) {
  return (
    <section className="bg-maroon">
      <div className="max-w-7xl mx-auto px-5 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={flip ? 'lg:order-2' : ''}>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-lg">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/book" variant="light">Book an appointment <ArrowRight size={18} /></Button>
            <Button href={tel} variant="ghostLight"><Phone size={18} /> Call us</Button>
          </div>
        </div>
        <div className={flip ? 'lg:order-1' : ''}>
          <Photo id={photo} alt={alt} className="w-full h-[340px] lg:h-[440px] rounded-[1.75rem] shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
