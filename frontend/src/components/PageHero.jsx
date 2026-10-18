import { ArrowRight } from 'lucide-react'
import Photo from './Photo'
import Eyebrow from './Eyebrow'
import Button from './Button'
import Reveal from './Reveal'
import { tel } from '../data/site'

export default function PageHero({ kicker, title, text, photo, src, alt = '', children, showActions = true }) {
  const hasImage = Boolean(photo || src)
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/55" />
      <div className={`relative max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20 ${hasImage ? 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center' : ''}`}>
        <div className={hasImage ? '' : 'max-w-3xl'}>
          <Eyebrow light>{kicker}</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mt-4">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-xl">{text}</p>
          {(children || showActions) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {children || (
                <>
                  <Button to="/book" variant="cyan">Book an appointment <ArrowRight size={18} /></Button>
                  <Button href={tel} variant="ghostLight">Call us</Button>
                </>
              )}
            </div>
          )}
        </div>
        {hasImage && (
          <Reveal>
            {src
              ? <img src={src} alt={alt} className="w-full h-[320px] md:h-[440px] rounded-2xl object-cover shadow-2xl" />
              : <Photo id={photo} alt={alt} className="w-full h-[320px] md:h-[440px] rounded-2xl shadow-2xl" />}
          </Reveal>
        )}
      </div>
    </section>
  )
}
