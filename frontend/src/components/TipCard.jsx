import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Photo from './Photo'
import Button from './Button'

export default function TipCard({ tip, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition">
      <div className="relative w-full sm:w-2/5 shrink-0 h-48 sm:h-auto overflow-hidden">
        <Photo id={tip.photo} icon={tip.icon} alt={tip.title} className="absolute inset-0 w-full h-full transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-col flex-1 p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal">{tip.tag}</p>
        <h3 className="font-display text-2xl font-bold text-charcoal mt-2 mb-2">{tip.title}</h3>
        <p className="text-sm text-ink/65 leading-relaxed mb-6">{tip.text}</p>
        <div className="mt-auto">
          <Button to={`/health-tips/${tip.slug}`} variant="outline" size="sm">Learn more <ArrowRight size={16} /></Button>
        </div>
      </div>
    </Reveal>
  )
}
