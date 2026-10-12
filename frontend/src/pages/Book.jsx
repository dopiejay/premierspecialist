import { useState } from 'react'
import { CalendarCheck, Clock, MapPin, Phone } from 'lucide-react'
import PageHead from '../components/PageHead'
import Button from '../components/Button'
import { SERVICES, H, P } from '../data/site'

export default function Book() {
  const [sent, setSent] = useState(false)
  const f = 'w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20'
  return (
    <>
      <PageHead kicker="Appointments" title="Request an appointment" text="Send us your details and our reception team will contact you to confirm a time." photo={P.outpatient} />
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-5 gap-10">
        <form className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          {sent ? (
            <div className="py-10 text-center"><span className="w-16 h-16 rounded-full bg-mint text-teal grid place-items-center mx-auto mb-4"><CalendarCheck size={30} /></span><h3 className="font-display text-3xl font-bold text-charcoal">Request received (demo)</h3><p className="text-ink/65 mt-2">Nothing was sent — in the live version, reception confirms by phone or SMS.</p></div>
          ) : (
            <>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Your details</h2>
              <input required className={f} placeholder="Full name" />
              <input required className={f} type="tel" placeholder="Phone number" />
              <select className={f} defaultValue=""><option value="" disabled>Department</option>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select>
              <input type="date" className={f} />
              <textarea rows="4" className={f} placeholder="Anything we should know? (optional)" />
              <Button type="submit" size="lg">Request appointment</Button>
              <p className="text-xs text-ink/60">For emergencies, call us or walk in. Do not use this form.</p>
            </>
          )}
        </form>
        <aside className="lg:col-span-2 space-y-5">
          {[[MapPin, 'Find us', `${H.address}. ${H.landmark}.`], [Phone, 'Call', H.phone], [Clock, 'Hours', 'Open every day, including walk-in care. Call ahead to confirm hours.']].map(([Icon, t, d]) => (
            <div key={t} className="flex gap-4 bg-mint rounded-2xl p-5"><span className="w-11 h-11 rounded-xl bg-white text-teal grid place-items-center shrink-0"><Icon size={20} /></span><p><b className="text-charcoal">{t}</b><br /><span className="text-ink/70 text-sm">{d}</span></p></div>
          ))}
          <iframe title="Map" loading="lazy" className="w-full h-64 rounded-2xl border-0" src="https://www.google.com/maps?q=Shifa+Hospital+Fatima+Arcade+Haile+Selassie+Road+Blantyre&output=embed" />
        </aside>
      </section>
    </>
  )
}
