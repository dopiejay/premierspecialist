import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../components/Photo'
import { TIPS } from '../data/site'

export default function HealthTipDetail() {
  const { slug } = useParams()
  const tip = TIPS.find((t) => t.slug === slug)
  if (!tip) return <Navigate to="/health-tips" replace />
  return (
    <section className="max-w-3xl mx-auto px-5 pt-32 pb-24">
      <Link to="/health-tips" className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal/60 hover:text-charcoal transition"><ArrowRight size={16} className="rotate-180" /> All health tips</Link>
      <Photo id={tip.photo} icon={tip.icon} alt={tip.title} w={1200} className="mt-8 w-full h-72 md:h-96 rounded-2xl block" />
      <h1 className="mt-8 font-display text-4xl md:text-5xl font-bold text-charcoal">{tip.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink/70">{tip.overview}</p>
    </section>
  )
}
