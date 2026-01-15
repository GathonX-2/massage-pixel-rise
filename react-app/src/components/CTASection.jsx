import { ctaBlock } from '../data/siteContent'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(5,8,22,0.9), rgba(12,18,37,0.9)), url(${ctaBlock.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40" style={{ backgroundSize: '120px 120px' }} />
      <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-brand-primary/25 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-[130px]" />
      <div className="relative mx-auto max-w-5xl text-center text-white">
        <span className="pill mx-auto">Offre spéciale</span>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{ctaBlock.heading}</h2>
        <p className="mt-4 text-base text-white/85">{ctaBlock.description}</p>
        <Link to={ctaBlock.buttonHref} className="btn-primary mt-8 inline-flex">
          {ctaBlock.buttonLabel}
        </Link>
      </div>
    </section>
  )
}

export default CTASection
