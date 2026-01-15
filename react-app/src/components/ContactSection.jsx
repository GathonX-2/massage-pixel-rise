import { contactDetails } from '../data/siteContent'
import { toast } from 'sonner'

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Merci ! Nous revenons vers vous très vite.')
  }

  return (
    <section className="section-padding" id="formulaire-contact">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <form onSubmit={handleSubmit} className="card-neo border-white/10 p-8 text-white">
          <span className="pill">Contact</span>
          <h2 className="mt-4 section-heading">Envoyez-nous un message</h2>
          <div className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-200">
                Prénom
                <input
                  type="text"
                  required
                  placeholder="Entrez votre prénom"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-200">
                Nom
                <input
                  type="text"
                  required
                  placeholder="Entrez votre nom"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
                />
              </label>
            </div>
            <label className="text-sm text-slate-200">
              Email
              <input
                type="email"
                required
                placeholder="Entrez votre email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
              />
            </label>
            <label className="text-sm text-slate-200">
              Sujet
              <input
                type="text"
                required
                placeholder="Entrez le sujet"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
              />
            </label>
            <label className="text-sm text-slate-200">
              Message
              <textarea
                required
                rows="5"
                placeholder="Écrivez vos notes ou questions ici..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
              />
            </label>
            <button type="submit" className="btn-primary mt-4 w-fit">
              Envoyer le message
            </button>
          </div>
        </form>

        <div className="card-neo border-white/10 p-8 text-white">
          <span className="pill">Informations</span>
          <h2 className="mt-4 section-heading">Visitez-nous</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold text-white">Adresse</p>
              <p>{contactDetails.address}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Téléphone</p>
              <p>
                <a href={`tel:${contactDetails.phone}`} className="text-brand-accent hover:text-white">
                  {contactDetails.phone}
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-brand-accent hover:text-white"
                >
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              src={contactDetails.mapEmbed}
              title="Localisation IM Massage"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
