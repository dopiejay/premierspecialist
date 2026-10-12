import Photo from './Photo'
import Eyebrow from './Eyebrow'

export default function PageHead({ kicker, title, text, photo }) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      {photo && <Photo id={photo} className="absolute inset-0 w-full h-full opacity-25" />}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
      <div className="relative max-w-7xl mx-auto px-5 pt-40 pb-20">
        <Eyebrow light>{kicker}</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">{title}</h1>
        <p className="mt-4 text-white/80 max-w-2xl text-lg">{text}</p>
      </div>
    </section>
  )
}
