import { ArrowRight, Building2, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { P } from '../data/site'

export default function Insurance() {
  return (
    <section className="bg-cloud py-24">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Patients</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5">Insurance &amp; medical schemes</h2>
          <p className="text-ink/70 text-lg mb-7 leading-relaxed">We work with corporate medical schemes and insurers. Contact our administration team before your visit to confirm your provider is accepted and whether pre-authorisation is needed.</p>
          <div className="space-y-3 mb-8">
            {['Bring your membership card and ID', 'Confirm eligibility with our team first', 'Self-paying patients are welcome'].map((t) => <p key={t} className="flex items-center gap-3 font-semibold"><span className="w-7 h-7 rounded-full bg-white text-teal grid place-items-center"><Check size={16} /></span>{t}</p>)}
          </div>
          <Button to="/book">Ask about your cover <ArrowRight size={18} /></Button>
        </Reveal>
        <Reveal delay={120} className="relative">
          <Photo id={P.outpatient} alt="Hospital reception" icon={Building2} className="w-full h-[420px] rounded-[1.75rem] shadow-xl" />
        </Reveal>
      </div>
    </section>
  )
}
