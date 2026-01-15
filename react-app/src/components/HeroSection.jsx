import { useEffect, useState } from 'react'

const useTypedWords = (words = [], typingSpeed = 80, pause = 1500) => {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const handleTyping = () => {
      const currentWord = words[index % words.length]
      const shouldDelete = isDeleting
      const nextText = shouldDelete
        ? currentWord.slice(0, display.length - 1)
        : currentWord.slice(0, display.length + 1)

      setDisplay(nextText)

      if (!shouldDelete && nextText === currentWord) {
        setTimeout(() => setIsDeleting(true), pause)
      } else if (shouldDelete && nextText === '') {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed)
    return () => clearTimeout(timeout)
  }, [display, index, isDeleting, pause, typingSpeed, words])

  return display
}

const HeroSection = ({ config }) => {
  const typed = useTypedWords(config?.typedPhrases ?? [])

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(5,8,22,0.75), rgba(6,11,28,0.9)), url(${config.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute inset-0 bg-grid-dark"
          style={{ backgroundSize: '120px 120px' }}
        />
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand-primary/30 blur-[120px]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-brand-accent/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-24 text-center">
        <span className="pill">IM Massage</span>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          {config.title}{' '}
          <span className="text-brand-accent">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        {config.description && (
          <p className="max-w-3xl text-base text-white/80 md:text-lg">
            {config.description}
          </p>
        )}
        {config.ctaLabel && (
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={config.ctaHref} className="btn-primary">
              {config.ctaLabel}
            </a>
            <a href="#services" className="btn-outline">
              Découvrir nos offres
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
