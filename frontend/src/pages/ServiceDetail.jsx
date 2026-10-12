import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, Phone, UserRound } from 'lucide-react'
import PageHead from '../components/PageHead'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import ContactDetails from '../components/ContactDetails'
import { SERVICES, tel } from '../data/site'

const STEPS = [
  ['Request an appointment', 'Book online, or call reception directly.'],
  ['We confirm', 'Reception contacts you to confirm a time and any requirements.'],
  ['Come prepared', 'Bring your ID, insurance details and any referral notes.'],
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  return (
    <>
      <PageHead kicker="Medical services" title={service.title} text={service.overview} photo={service.photo} />

      <Section bg="white">
        <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal/60 hover:text-charcoal transition mb-10"><ArrowRight size={16} className="rotate-180" /> All services</Link>
        <SectionHeader eyebrow="What this service covers" title="Conditions &amp; treatments" text="The information below is placeholder copy and is being reviewed with our clinical team before it goes live." />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-12">
          <div>
            <h3 className="font-display text-xl font-bold text-charcoal">Conditions &amp; patient needs</h3>
            <ul className="mt-5 space-y-4">
              {service.conditions.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cloud text-teal grid place-items-center shrink-0 mt-0.5"><Check size={14} /></span>
                  <span className="text-ink/70 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-charcoal">Available treatments &amp; procedures</h3>
            <ul className="mt-5 space-y-4">
              {service.treatments.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cloud text-teal grid place-items-center shrink-0 mt-0.5"><Check size={14} /></span>
                  <span className="text-ink/70 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {service.clinicians?.length > 0 && (
          <div className="mt-14 pt-14 border-t border-slate-200">
            <h3 className="font-display text-xl font-bold text-charcoal">Your care team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              {service.clinicians.map((c) => (
                <div key={c.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="w-12 h-12 rounded-full bg-cloud grid place-items-center shrink-0"><UserRound size={22} className="text-teal" /></span>
                  <div><p className="font-bold text-charcoal">{c.name}</p><p className="text-sm text-ink/60">{c.role}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section bg="cloud">
        <SectionHeader eyebrow="Next steps" title="How to book &amp; find us" text="Everything you need to arrange a visit — how to request an appointment, and where to find us." />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 items-start">
          <div>
            <h3 className="font-display text-xl font-bold text-charcoal">How to enquire or book</h3>
            <ol className="mt-6 space-y-5">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-white text-charcoal text-sm font-bold grid place-items-center shrink-0 shadow-sm">{i + 1}</span>
                  <div><p className="font-bold text-charcoal">{t}</p><p className="text-sm text-ink/65 mt-0.5">{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book">Book an appointment <ArrowRight size={18} /></Button>
              <Button href={tel} variant="outline"><Phone size={18} /> Call reception</Button>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-charcoal">Contact details &amp; location</h3>
            <div className="mt-6"><ContactDetails /></div>
          </div>
        </div>
      </Section>
    </>
  )
}
