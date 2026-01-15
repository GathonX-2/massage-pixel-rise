import { medicalInfoCards } from '../data/siteContent'

const MedicalInfo = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
      {medicalInfoCards.map((card) => (
        <div key={card.title} className="glass rounded-3xl p-6 text-center text-white">
          <div className="mb-4 text-3xl">•</div>
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="mt-3 text-sm text-slate-200 whitespace-pre-line">{card.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export default MedicalInfo
