import { testimonials as defaultTestimonials } from '../data/siteContent'

const Testimonials = ({ config = defaultTestimonials }) => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="pill mx-auto">Avis</span>
          <h2 className="section-heading mt-4 text-white">{config.heading}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {config.items.map((item) => (
            <article key={item.name} className="card-neo p-8 text-center text-white">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white/10">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="mt-4 text-sm text-slate-200">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
