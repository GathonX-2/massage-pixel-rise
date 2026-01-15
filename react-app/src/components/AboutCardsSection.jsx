import { aboutCards } from '../data/siteContent'

const AboutCardsSection = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {aboutCards.map((card) => (
        <article
          key={card.title}
          className="card-neo h-full overflow-hidden p-6 text-center text-white"
        >
          <div
            className="relative mb-6 h-40 w-full rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent" />
          </div>
          <h3 className="text-xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 text-sm text-slate-200">{card.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default AboutCardsSection
