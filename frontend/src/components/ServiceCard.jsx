import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Photo from './Photo'
import Button from './Button'

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="relative h-64 overflow-hidden"><Photo id={service.photo} icon={service.icon} alt={service.title} className="absolute inset-0 w-full h-full" /></div>
      <div className="flex flex-col flex-1 p-7">
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">{service.title}</h3>
        <p className="text-sm text-ink/65 leading-relaxed mb-6">{service.text}</p>
        <div className="mt-auto">
          <Button to={`/services/${service.slug}`} variant="outline" size="sm">Learn more <ArrowRight size={16} /></Button>
        </div>
      </div>
    </Reveal>
  )
}
