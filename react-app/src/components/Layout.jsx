import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const renderLinks = (extraClass = '') =>
    navLinks.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        onClick={closeMenu}
        className={({ isActive }) =>
          [
            'px-4 py-2 rounded-full transition text-sm font-medium tracking-wide',
            isActive
              ? 'bg-white/90 text-brand-dark'
              : 'text-white/80 hover:text-white',
            extraClass,
          ].join(' ')
        }
      >
        {link.label}
      </NavLink>
    ))

  return (
    <div className="min-h-screen w-full bg-[#050816] text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-radial-spot" />
        <div
          className="absolute inset-0 bg-grid-dark"
          style={{ backgroundSize: '120px 120px' }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050816]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            IM MASSAGE<span className="text-brand-primary">.</span>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {renderLinks()}
          </nav>
          <button
            className="rounded-full border border-white/20 p-2 text-white lg:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isOpen && (
          <div className="border-t border-white/10 bg-[#050816]/95 px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-2">{renderLinks('w-full')}</nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[#060b1c]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold text-white">IM MASSAGE</h2>
            <p className="mt-4 text-sm text-slate-300">
              IM MASSAGE est dédié à votre détente et à votre bien-être. Nous
              offrons une large gamme de massages, alliant expertise, techniques
              modernes et attention personnalisée pour répondre à vos attentes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Pages</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={`footer-${link.path}`}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Suivez-nous</h3>
            <div className="mt-4 flex gap-3 text-slate-300">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm capitalize hover:border-brand-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#04070f]">
          <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} IM MASSAGE — Tous droits réservés | Ce
            template réimaginé avec ❤️ par l’équipe Pixel Rise
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
