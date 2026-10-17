import { useState } from 'react'
import { CalendarCheck, Clock, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { SERVICES, H, HOURS } from '../data/site'

export default function Book() {
  const [sent, setSent] = useState(false)
  const [reference, setReference] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const f = 'w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20'

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Something went wrong. Please try again or call us.')
      setReference(body.reference)
      setSent(true)
    } catch (x) {
      setError(x.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero kicker="Appointments" title="Request an appointment" text="Send us your details and our reception team will contact you to confirm a time." showActions={false} />
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-5 gap-10">
        <form className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 space-y-4" onSubmit={submit}>
          {sent ? (
            <div className="py-10 text-center"><span className="w-16 h-16 rounded-full bg-green/10 text-green grid place-items-center mx-auto mb-4"><CalendarCheck size={30} /></span><h3 className="font-display text-3xl font-bold text-charcoal">Request received</h3><p className="text-ink/65 mt-2">Your reference is <b className="text-charcoal">{reference}</b>. Our reception team will contact you to confirm a time.</p></div>
          ) : (
            <>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Your details</h2>
              <input required name="name" className={f} placeholder="Full name" />
              <input required name="phone" type="tel" className={f} placeholder="Phone number" />
              <select name="service" className={f} defaultValue=""><option value="" disabled>Department</option>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select>
              <input name="preferred_date" type="date" className={f} />
              <textarea name="message" rows="4" className={f} placeholder="Anything we should know? (optional)" />
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}
              <Button type="submit" size="lg" disabled={busy}>{busy ? 'Sending…' : 'Request appointment'}</Button>
              <p className="text-xs text-ink/60">For urgent medical emergencies, please go to your nearest hospital emergency department.</p>
            </>
          )}
        </form>
        <aside className="lg:col-span-2 space-y-5">
          {[[MapPin, 'Find us', `${H.address}.`], [Phone, 'Call', H.phone], [Clock, 'Hours', HOURS]].map(([Icon, t, d]) => (
            <div key={t} className="flex gap-4 bg-mint rounded-2xl p-5"><span className="w-11 h-11 rounded-xl bg-white text-cyan grid place-items-center shrink-0"><Icon size={20} /></span><p><b className="text-charcoal">{t}</b><br /><span className="text-ink/70 text-sm">{d}</span></p></div>
          ))}
          <iframe title="Map" loading="lazy" className="w-full h-64 rounded-2xl border-0" src="https://www.google.com/maps?q=Premier+Specialist+Clinic+Beaton+Blantyre&output=embed" />
        </aside>
      </section>
    </>
  )
}
