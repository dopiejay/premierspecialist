import { Clock, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import Eyebrow from '../components/Eyebrow'
import { P } from '../data/site'

export default function About() {
  const vals = [[HeartPulse, 'Patient-centred', 'Every patient is treated with respect, dignity and clear communication.'], [ShieldCheck, 'Safety', 'Patient safety and privacy come first.'], [Stethoscope, 'Expertise', 'Qualified clinicians working with nursing and diagnostic teams.'], [Clock, 'Accessible', 'Centrally located in Blantyre CBD.']]
  return (
    <>
      <PageHead kicker="About us" title="About Shifa Hospital" text="A private hospital built around accessible, compassionate care in the centre of Blantyre." photo={P.doctor} />
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal><Photo id={P.doctor} alt="Care team" icon={Stethoscope} className="w-full h-[460px] rounded-2xl shadow-xl" /></Reveal>
        <Reveal delay={120}>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="font-display text-4xl font-bold text-charcoal mt-3 mb-5">Healthcare that respects every patient</h2>
          <p className="text-ink/70 text-lg leading-relaxed">To provide compassionate, professional and patient-centred healthcare in a respectful environment, supporting individuals and families through accessible services and clear communication.</p>
        </Reveal>
      </section>
      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vals.map(([Icon, t, d], i) => <Reveal key={t} delay={i * 80} className="bg-white rounded-2xl p-7 border border-slate-200"><span className="w-12 h-12 rounded-xl bg-mint text-teal grid place-items-center mb-4"><Icon size={22} /></span><h3 className="font-bold text-xl text-charcoal mb-2">{t}</h3><p className="text-sm text-ink/65 leading-relaxed">{d}</p></Reveal>)}
        </div>
      </section>
    </>
  )
}
