import { aboutHighlights, teamMembers } from '../data/siteContent'

const AboutSection = () => {
  return (
    <section className="section-padding" id="aproposdenous">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/assets/images/hero_bg_2.jpg"
                alt="Espace détente"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/70 via-transparent" />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="pill">Massage</span>
                <span className="pill">Bien-être</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/assets/images/hero_bg_1.jpg"
                alt="Salon de massage"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/75 via-transparent" />
            </div>
          </div>
          <div className="card-neo border-white/10 p-8">
            <p className="subheading">Notre histoire</p>
            <h2 className="mt-4 section-heading">À propos de notre expertise</h2>
            <p className="mt-4 text-base text-slate-200">
              Depuis nos débuts, nous avons pour mission de fournir des expériences de
              massage de qualité avec une approche centrée sur la détente et une
              expertise reconnue dans le bien-être.
            </p>
            <p className="mt-3 text-base text-slate-200">
              Nous combinons techniques modernes et attention personnalisée pour
              répondre aux attentes de nos clients avec des résultats durables.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-200">
              {aboutHighlights.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />
                  <div>
                    <p className="font-semibold text-white">{point.title}</p>
                    <p className="text-slate-300">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-neo border-white/10 p-8">
          <div className="text-center">
            <p className="subheading">Notre équipe</p>
            <h2 className="mt-3 section-heading">Des experts du toucher</h2>
            <p className="mt-2 text-base text-slate-200">
              Découvrez les professionnels passionnés qui prennent soin de votre détente
              et de votre bien-être.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-neo border-white/10 p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
                />
                <div>
                  <p className="text-lg font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-brand-accent">{member.role}</p>
                </div>
                <p className="text-sm text-slate-200">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
