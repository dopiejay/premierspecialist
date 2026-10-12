import Eyebrow from './Eyebrow'

export default function SectionHeader({ eyebrow, title, text, light = false, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display text-4xl md:text-5xl font-bold mt-3 ${light ? 'text-white' : 'text-charcoal'}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${light ? 'text-white/70' : 'text-ink/65'}`}>{text}</p>}
    </div>
  )
}
