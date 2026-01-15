import { specialOffers } from '../data/siteContent'

const SpecialOffers = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="pill mx-auto">Offres</span>
          <h2 className="section-heading mt-4 text-white">{specialOffers.heading}</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {specialOffers.cards.map((offer) => (
            <article
              key={offer.title}
              className="card-neo gradient-border overflow-hidden lg:flex"
            >
              <div
                className="relative h-56 flex-1 bg-cover bg-center lg:h-auto"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8 text-white">
                <h3 className="text-2xl font-semibold">{offer.title}</h3>
                <p className="text-sm text-slate-200">{offer.description}</p>
                <a
                  href={offer.linkHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-white"
                >
                  {offer.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
