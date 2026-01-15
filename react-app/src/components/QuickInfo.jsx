import { quickInfoItems } from '../data/siteContent'
import { Home, Phone, Mail, Clock } from 'lucide-react'

const iconMap = { Home, Phone, Mail, Clock }

const QuickInfo = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickInfoItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Home
            return (
              <div
                key={item.title}
                className="card-neo border-white/10 p-6 transition hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-full bg-white/15 p-3 text-brand-accent ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickInfo
