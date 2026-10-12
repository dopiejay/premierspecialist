import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import Button from './Button'
import { H, tel, DIRECTIONS } from '../data/site'

function Row({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="w-10 h-10 rounded-xl bg-white text-teal grid place-items-center shrink-0 shadow-sm"><Icon size={18} /></span>
      <div>
        <p className="font-bold text-charcoal text-sm">{title}</p>
        <p className="text-sm text-ink/65 mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      <Row icon={MapPin} title="Find us">{H.address}. {H.landmark}.</Row>
      <Row icon={Phone} title="Call"><a href={tel} className="font-semibold text-teal hover:underline">{H.phone}</a></Row>
      <Row icon={Clock} title="Opening hours">Open every day, including walk-in care. Call ahead to confirm hours.</Row>
      <Button href={DIRECTIONS} target="_blank" rel="noreferrer" variant="outline" size="sm">Get directions <Navigation size={16} /></Button>
    </div>
  )
}
