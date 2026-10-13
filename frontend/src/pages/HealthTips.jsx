import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import TipCard from '../components/TipCard'
import { TIPS, P } from '../data/site'

export default function HealthTips() {
  return (
    <>
      <PageHero kicker="Health & wellbeing" title="Health Tips & Wellness" text="Practical, everyday guidance to help you and your family stay healthy — inspired by the advice we share with our community." photo={P.doctor} />
      <Section bg="white">
        <SectionHeader eyebrow="Everyday wellbeing" title="Simple habits for better health" text="Small, consistent choices make a big difference. Open any topic to learn more." />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {TIPS.map((t, i) => <TipCard key={t.slug} tip={t} delay={(i % 2) * 100} />)}
        </div>
        <p className="mt-8 text-sm text-ink/50">General information only — it isn’t a substitute for professional medical advice. Please consult our team about your own health.</p>
      </Section>
    </>
  )
}
