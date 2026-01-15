import { aboutMission } from '../data/siteContent'

const AboutMission = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-4xl text-center text-white">
      <h2 className="text-3xl font-semibold text-brand-primary">{aboutMission.title}</h2>
      <p className="mt-6 text-base text-slate-200 leading-relaxed">{aboutMission.text}</p>
    </div>
  </section>
)

export default AboutMission
