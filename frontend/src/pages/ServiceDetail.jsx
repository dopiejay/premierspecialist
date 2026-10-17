import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, UserRound } from 'lucide-react'
import Photo from '../components/Photo'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import { SERVICES } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  return (
    <>
      <section className="max-w-3xl mx-auto px-5 pt-32 pb-4">
        <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal/60 hover:text-charcoal transition"><ArrowRight size={16} className="rotate-180" /> All services</Link>
        <Photo id={service.photo} icon={service.icon} alt={service.title} w={1200} className="mt-8 w-full h-72 md:h-96 rounded-2xl block" />
        <h1 className="mt-8 font-display text-4xl md:text-5xl font-bold text-charcoal">{service.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.overview}</p>
      </section>

      <Section bg="white">
        <SectionHeader eyebrow="What this service covers" title={service.categories ? 'Our areas of care' : 'Conditions & treatments'} text="The information below is placeholder copy and is being reviewed with our clinical team before it goes live." />
        {service.categories ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.categories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-charcoal">{cat.title}</h3>
                <ul className="mt-4 space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-cloud text-cyan grid place-items-center shrink-0 mt-0.5"><Check size={12} /></span>
                      <span className="text-sm text-ink/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-12">
            <div>
              <h3 className="font-display text-xl font-bold text-charcoal">Conditions &amp; patient needs</h3>
              <ul className="mt-5 space-y-4">
                {service.conditions?.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cloud text-cyan grid place-items-center shrink-0 mt-0.5"><Check size={14} /></span>
                    <span className="text-ink/70 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-charcoal">Available treatments &amp; procedures</h3>
              <ul className="mt-5 space-y-4">
                {service.treatments?.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cloud text-cyan grid place-items-center shrink-0 mt-0.5"><Check size={14} /></span>
                    <span className="text-ink/70 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {service.clinicians?.length > 0 && (
          <div className="mt-14 pt-14 border-t border-slate-200">
            <h3 className="font-display text-xl font-bold text-charcoal">Your care team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              {service.clinicians.map((c) => (
                <div key={c.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="w-12 h-12 rounded-full bg-cloud grid place-items-center shrink-0"><UserRound size={22} className="text-cyan" /></span>
                  <div><p className="font-bold text-charcoal">{c.name}</p><p className="text-sm text-ink/60">{c.role}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  )
}
