import { ArrowRight, Check, CreditCard, ShieldCheck, Wallet } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { tel } from '../data/site'

const INSURANCE_POINTS = [
  'Bring your membership card and a form of identification',
  'Confirm with our administration team that your provider is accepted before your visit',
  'Ask whether pre-authorisation is needed for your service',
  'Self-paying patients are welcome',
]

export default function PatientFees() {
  return (
    <>
      <PageHero kicker="Patient Information" title="Fees & Insurance" text="Information on consultation fees, accepted medical schemes and payment — so you know what to expect before your visit." showActions={false} />
      <Section bg="white">
        <SectionHeader eyebrow="Fees" title="Consultation fees" text="Fees depend on the service and type of consultation you need." />
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          <Reveal className="bg-cloud rounded-2xl p-8 flex gap-4">
            <span className="w-11 h-11 rounded-xl bg-white text-cyan grid place-items-center shrink-0"><Wallet size={20} /></span>
            <p><b className="text-charcoal">Confirmed at booking</b><br /><span className="text-ink/65 text-sm leading-relaxed">Our reception team will explain the fees for your appointment when your booking is confirmed, so there are no surprises on the day.</span></p>
          </Reveal>
          <Reveal delay={100} className="bg-cloud rounded-2xl p-8 flex gap-4">
            <span className="w-11 h-11 rounded-xl bg-white text-cyan grid place-items-center shrink-0"><CreditCard size={20} /></span>
            <p><b className="text-charcoal">Payment options</b><br /><span className="text-ink/65 text-sm leading-relaxed">Our team will explain the accepted payment methods when you book or when you arrive. Please ask reception if you have any questions about paying for your care.</span></p>
          </Reveal>
        </div>
        <p className="mt-8 text-sm text-ink/50">Published price lists are available once approved by clinic management. Please contact reception for the most current fee information.</p>
      </Section>
      <Section bg="mint">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Medical schemes</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Insurance &amp; medical schemes</h2>
            <p className="text-ink/70 text-lg leading-relaxed">We work with corporate medical schemes and insurers. Because accepted providers and cover arrangements can vary, please contact our administration team before your visit to confirm that your provider is accepted and whether pre-authorisation is needed for your appointment.</p>
            <div className="space-y-3 mt-7">
              {INSURANCE_POINTS.map((t) => (
                <p key={t} className="flex items-center gap-3 font-semibold"><span className="w-7 h-7 rounded-full bg-white text-cyan grid place-items-center shrink-0"><Check size={16} /></span>{t}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book" variant="primary">Ask about your cover <ArrowRight size={18} /></Button>
              <Button href={tel} variant="outline">Call reception</Button>
            </div>
          </div>
          <Reveal delay={120} className="bg-white rounded-2xl p-8 border border-slate-200">
            <span className="w-12 h-12 rounded-xl bg-cloud text-cyan grid place-items-center"><ShieldCheck size={24} /></span>
            <h3 className="font-display text-2xl font-bold text-charcoal mt-5 mb-3">A note on cover</h3>
            <p className="text-ink/70 leading-relaxed">Having medical insurance does not always guarantee full cover for every service. Your scheme may require pre-authorisation, and some services may have limits on what is covered.</p>
            <p className="text-ink/70 leading-relaxed mt-4">Checking with your scheme and our administration team before your visit helps you understand any costs you may be responsible for.</p>
          </Reveal>
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-3xl">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Still unsure about fees?</h2>
          <p className="text-ink/70 text-lg leading-relaxed">Our reception and administration teams are happy to talk through fees, payment methods and insurance before your appointment. Getting clarity in advance means you can focus on your health on the day.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={tel} variant="primary">Call reception</Button>
            <Button to="/patient-info/faq" variant="outline">Read our FAQs <ArrowRight size={18} /></Button>
          </div>
        </div>
        <p className="mt-10 text-sm text-ink/50">Fee and insurance information is pending confirmation by Premier Specialist Clinic management.</p>
      </Section>
    </>
  )
}
