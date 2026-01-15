import { servicesStory } from '../data/siteContent'

const ServicesStory = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src={servicesStory.image}
            alt="Service"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="pill">Expertise</span>
            <span className="pill">Soin</span>
          </div>
        </div>
        <div className="card-neo border-white/10 p-8 text-white">
          <h2 className="section-heading mb-4 text-white">{servicesStory.title}</h2>
          <div className="space-y-4 text-base text-slate-200">
            {servicesStory.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStory
