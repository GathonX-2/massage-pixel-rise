import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import QuickInfo from './components/QuickInfo'
import ServiceGrid from './components/ServiceGrid'
import AboutSection from './components/AboutSection'
import AboutCardsSection from './components/AboutCardsSection'
import AboutMission from './components/AboutMission'
import BlogPageSection from './components/BlogPageSection'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import MedicalInfo from './components/MedicalInfo'
import ProfessionalChoice from './components/ProfessionalChoice'
import ServicesStory from './components/ServicesStory'
import SpecialOffers from './components/SpecialOffers'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import {
  heroContent,
  homeServices,
  servicesList,
  servicesStory,
  servicesWhy,
  servicesTestimonials,
  medicalInfoCards,
  professionalChoice,
} from './data/siteContent'

const HomePage = () => (
  <div className="space-y-16 pb-20">
    <HeroSection config={heroContent.home} />
    <QuickInfo />
    <ServiceGrid
      title="Ce que nous offrons"
      intro="Des soins de massage personnalisés pour répondre à vos besoins spécifiques."
      services={homeServices}
      ctaLabel="Voir tous les services"
      ctaHref="#"
    />
    <WhyChoose />
    <SpecialOffers />
    <Testimonials />
    <AboutSection />
    <CTASection />
  </div>
)

const ServicesPage = () => (
  <div className="space-y-16 pb-20">
    <HeroSection config={heroContent.services} />
    <ServiceGrid
      title="Nos services"
      intro="Découvrez nos massages relaxants, thérapeutiques, énergétiques et plus encore."
      services={servicesList}
    />
    <ServicesStory />
    <WhyChoose config={servicesWhy} />
    <Testimonials config={servicesTestimonials} />
    <CTASection />
  </div>
)

const AboutPage = () => (
  <div className="space-y-16 pb-20">
    <HeroSection config={heroContent.about} />
    <AboutSection />
    <AboutCardsSection />
    <AboutMission />
    <MedicalInfo />
    <ProfessionalChoice />
    <CTASection />
  </div>
)

const BlogPage = () => (
  <div className="space-y-16 pb-20">
    <HeroSection config={heroContent.blog} />
    <BlogPageSection />
    <CTASection />
  </div>
)

const ContactPage = () => (
  <div className="space-y-16 pb-20">
    <HeroSection config={heroContent.contact} />
    <ContactSection />
    <CTASection />
  </div>
)

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apropos" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </Layout>
  )
}

export default App
