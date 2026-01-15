const ServiceGrid = ({ title, intro, services, ctaLabel, ctaHref }) => {
  return (
    <section className="section-padding" id="services">
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 flex flex-col gap-4 text-center">
            <span className="pill mx-auto">Nos services</span>
            <h2 className="section-heading">{title}</h2>
            {intro && <p className="text-base text-slate-200">{intro}</p>}
            {ctaLabel && (
              <a
                href={ctaHref || '#'}
                className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-white"
              >
                {ctaLabel} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-neo gradient-border flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-slate-200">{service.description}</p>
                <button className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand-accent ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10">
                  En savoir plus
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid
