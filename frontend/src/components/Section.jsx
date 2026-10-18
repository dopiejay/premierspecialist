const BG = { white: 'bg-white', cloud: 'bg-cloud', mint: 'bg-mint', purple: 'bg-purple text-white' }

export default function Section({ id, bg = 'white', className = '', innerClassName = '', children }) {
  return (
    <section id={id} className={`${BG[bg] || 'bg-white'} scroll-mt-28 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 py-24 ${innerClassName}`}>{children}</div>
    </section>
  )
}
