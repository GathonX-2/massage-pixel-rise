import { professionalChoice } from '../data/siteContent'

const ProfessionalChoice = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
      <div className="text-center md:text-left text-white">
        <h2 className="text-3xl font-semibold text-brand-primary">
          {professionalChoice.title}
        </h2>
        <p className="mt-4 text-base text-slate-200">{professionalChoice.text}</p>
      </div>
      <div className="text-center">
        <img
          src={professionalChoice.image}
          alt={professionalChoice.title}
          className="w-full rounded-3xl shadow-lg"
          style={{ objectFit: 'cover', maxHeight: 400 }}
        />
      </div>
    </div>
  </section>
)

export default ProfessionalChoice
