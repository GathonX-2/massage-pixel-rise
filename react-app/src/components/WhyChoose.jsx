import { whyChoose as defaultConfig } from '../data/siteContent'

const WhyChoose = ({ config = defaultConfig }) => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-white/5 shadow-soft ring-1 ring-white/10 md:grid md:grid-cols-[1.1fr_1fr]">
        <div className="relative">
          <div
            className="h-full min-h-[280px] bg-cover bg-center"
            style={{ backgroundImage: `url(${config.background})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-[#050816]/55" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="pill">IM Massage</span>
            <span className="pill">Qualité</span>
          </div>
        </div>
        <div className="relative flex flex-col gap-8 p-10 text-white">
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-brand-primary/20 blur-[70px]" />
          <div className="relative space-y-4">
            <span className="pill">{config.heading}</span>
            <p className="text-lg text-slate-100">{config.lead}</p>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-3">
            {config.counters.map(({ value, caption }) => (
              <div
                key={caption}
                className="card-neo border-white/10 p-4 text-center shadow-glow"
              >
                <p className="text-3xl font-semibold text-white">{value}</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
