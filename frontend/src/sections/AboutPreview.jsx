import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, HeartPulse, MapPin, Stethoscope } from 'lucide-react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const POINTS = [
  [HeartPulse, 'Patient-centred care', 'Respect, dignity and clear communication at every visit.'],
  [Stethoscope, 'Experienced clinicians', 'Qualified doctors supported by nursing and diagnostic teams.'],
  [FlaskConical, 'On-site diagnostics', 'Laboratory and investigations to guide faster decisions.'],
  [MapPin, 'Central location', 'In Blantyre CBD, close to offices, shops and transport.'],
]

export default function AboutPreview() {
  return (
    <section className="bg-cloud py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <img src="/images/about.jpg" alt="Premier Specialist Clinic" className="w-full h-[380px] lg:h-[480px] rounded-[1.75rem] shadow-xl object-cover" />
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <Eyebrow>About Premier Specialist Clinic</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5">Specialist care in the heart of Blantyre</h2>
          <p className="text-ink/70 text-lg leading-relaxed">Professional, patient-centred care in a respectful environment. We support individuals and families through accessible specialist consultations, diagnostics and clear communication.</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 mt-9">
            {POINTS.map(([Icon, t, d]) => (
              <div key={t} className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-white text-charcoal grid place-items-center shrink-0"><Icon size={20} /></span>
                <div>
                  <p className="font-bold text-charcoal">{t}</p>
                  <p className="text-sm text-ink/60 mt-0.5 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 mt-9 font-bold text-cyan hover:text-charcoal transition">Read more about us <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
