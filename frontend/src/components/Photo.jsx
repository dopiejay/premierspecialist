import { useState } from 'react'
import { HeartPulse } from 'lucide-react'
import { img } from '../data/site'

export default function Photo({ id, src, className = '', alt = '', icon: Icon = HeartPulse, w }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div className={`${className} bg-gradient-to-br from-purple to-cyan grid place-items-center text-white/60`}><Icon size={44} /></div>
  return <img src={src || img(id, w)} alt={alt} loading="lazy" onError={() => setBad(true)} className={`${className} object-cover`} />
}
