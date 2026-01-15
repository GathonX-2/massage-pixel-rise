export const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'À propos', path: '/apropos' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const heroContent = {
  home: {
    title: 'Nous apportons des solutions à vos',
    typedPhrases: ['fatigues', 'stress', 'soin du corps'],
    description: null,
    ctaLabel: 'Commencer maintenant',
    ctaHref: '#',
    background: '/assets/images/hero_bg_1.jpg',
  },
  services: {
    title: 'Nous offrons',
    typedPhrases: ['nos services pour soulager votre douleur'],
    description: null,
    ctaLabel: 'Commencer maintenant',
    ctaHref: '',
    background: '/assets/images/hero_bg_1.jpg',
  },
  about: {
    title: 'À propos de nous',
    typedPhrases: ['company'],
    description: null,
    ctaLabel: 'Commencer Maitenant',
    ctaHref: '#aproposdenous',
    background: '/assets/images/hero_bg_1.jpg',
  },
  blog: {
    title: 'Découvrez',
    typedPhrases: ['nos blogs dédiés au bien-être et à la détente'],
    description: null,
    background: '/assets/images/hero_bg_1.jpg',
  },
  contact: {
    title: 'Contactez-nous',
    typedPhrases: ["pour avoir plus d'informations"],
    description: null,
    ctaLabel: null,
    ctaHref: null,
    background: '/assets/images/hero_bg_1.jpg',
  },
}

export const quickInfoItems = [
  {
    title: 'Visitez notre adresse',
    description: 'Hell-Ville, Nosy-Be, DIANA, MADAGASCAR',
    icon: 'Home',
  },
  {
    title: 'Appelez-nous',
    description: '+261 (32) 71 900 24',
    icon: 'Phone',
  },
  {
    title: 'Envoyez-nous un message',
    description: 'info@islandmanager.com',
    icon: 'Mail',
  },
  {
    title: "Heures d'ouverture",
    description: 'Lun-Ven 7h00 - 17h00',
    icon: 'Clock',
  },
]

export const homeServices = [
  {
    title: 'Massage Relaxant',
    description:
      "Profitez d'un moment de détente absolue avec nos massages relaxants qui apaisent le corps et l'esprit.",
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Soulagez vos tensions musculaires et douleurs avec nos massages thérapeutiques adaptés à vos besoins.',
    image: '/assets/images/img_2.jpg',
  },
  {
    title: 'Massage Energisant',
    description:
      'Reboostez votre énergie grâce à nos massages tonifiants conçus pour revitaliser votre corps.',
    image: '/assets/images/img_3.jpg',
  },
]

export const servicesList = [
  {
    title: 'Massage Relaxant',
    description:
      'Détendez-vous et évacuez le stress avec nos massages relaxants personnalisés.',
    image: '/assets/images/img_4.jpg',
  },
  {
    title: 'Massage Thérapeutique',
    description:
      'Soulagez vos tensions musculaires et revitalisez votre corps grâce à nos massages ciblés.',
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Massage Postural',
    description:
      'Améliorez votre posture et soulagez vos tensions avec nos techniques de massage spécifiques.',
    image: '/assets/images/img_2.jpg',
  },
  {
    title: 'Massage Détox',
    description:
      'Éliminez les toxines et revitalisez votre corps avec nos massages détoxifiants.',
    image: '/assets/images/img_3.jpg',
  },
  {
    title: 'Massage Energétique',
    description:
      'Reboostez votre énergie et votre vitalité grâce à nos techniques de massage dynamisantes.',
    image: '/assets/images/img_4.jpg',
  },
  {
    title: 'Massage Préventif',
    description:
      'Prévenez les douleurs et maintenez votre bien-être grâce à nos séances régulières.',
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Techniques Spécialisées',
    description:
      'Profitez de nos massages spécialisés pour répondre à vos besoins spécifiques.',
    image: '/assets/images/img_2.jpg',
  },
  {
    title: 'Gestion du Stress',
    description:
      'Apprenez à mieux gérer votre stress avec nos massages relaxants et apaisants.',
    image: '/assets/images/img_3.jpg',
  },
]

export const whyChoose = {
  heading: 'Pourquoi nous choisir',
  lead:
    'Nous offrons des expériences de massage exceptionnelles, avec une équipe experte dédiée à votre détente et relaxation. Votre bien-être est notre priorité.',
  counters: [
    { value: '3K', caption: 'Patients satisfaits' },
    { value: '7', caption: "Années d'expérience" },
    { value: '100%', caption: 'Satisfaction garantie' },
  ],
  background: '/assets/images/hero_bg_1.jpg',
}

export const specialOffers = {
  heading: 'Nos Offres Spéciales',
  cards: [
    {
      title: 'Massage Relaxant',
      description:
        'Plongez dans une relaxation profonde et évacuez le stress grâce à nos massages personnalisés.',
      image: '/assets/images/img_1.jpg',
      linkLabel: 'En savoir plus',
      linkHref: 'course-details.html',
    },
    {
      title: 'Massage Thérapeutique',
      description:
        'Soulagez vos tensions musculaires et revitalisez votre corps avec nos soins de massage ciblés.',
      image: '/assets/images/img_2.jpg',
      linkLabel: 'En savoir plus',
      linkHref: 'course-details.html',
    },
    {
      title: 'Massage Énergisant',
      description:
        'Boostez votre énergie et retrouvez votre vitalité grâce à nos techniques de massage tonifiant.',
      image: '/assets/images/img_3.jpg',
      linkLabel: 'En savoir plus',
      linkHref: 'course-details.html',
    },
    {
      title: 'Massage de Luxe',
      description:
        'Offrez-vous un moment d’exception avec nos massages de luxe, combinant détente et raffinement.',
      image: '/assets/images/img_4.jpg',
      linkLabel: 'En savoir plus',
      linkHref: 'course-details.html',
    },
  ],
}

export const testimonials = {
  heading: 'Témoignages de nos Patients',
  items: [
    {
      name: 'Marie Dupont',
      quote:
        'Un moment de détente inoubliable ! Les massages sont incroyables, et je me sens tellement revitalisée après chaque séance.',
      image: '/assets/images/person_1.jpg',
    },
    {
      name: 'Jean Martin',
      quote:
        "Les massages thérapeutiques m'ont aidé à relâcher toutes mes tensions musculaires. Je recommande vivement leurs services !",
      image: '/assets/images/person_2.jpg',
    },
    {
      name: 'Sophie Lambert',
      quote:
        'Un espace où détente et bien-être priment. Chaque massage est une expérience unique, merci pour votre professionnalisme !',
      image: '/assets/images/person_3.jpg',
    },
    {
      name: 'Paul Girard',
      quote:
        'Le personnel est attentionné et les massages sont incroyablement relaxants. Une expérience que je referai sans hésiter !',
      image: '/assets/images/person_4.jpg',
    },
  ],
}

export const servicesStory = {
  title: 'Des Soins Personnalisés pour Tous',
  paragraphs: [
    'Chez IM Massage, nous nous engageons à offrir des soins de massage personnalisés, adaptés aux besoins uniques de chaque client. Que vous souhaitiez un moment de relaxation, un massage thérapeutique ciblé ou une expérience revitalisante, notre équipe dévouée est là pour vous accompagner à chaque étape.',
    'Nos services combinent expertise en massothérapie, techniques modernes et une approche humaine pour garantir votre détente et votre bien-être. Nous croyons fermement que chaque client mérite une attention particulière et des soins individualisés. Avec IM Massage, vous êtes entre de bonnes mains pour retrouver sérénité, énergie et qualité de vie.',
  ],
  image: '/assets/images/img_3.jpg',
}

export const servicesWhy = {
  heading: 'Pourquoi Nous Choisir',
  lead:
    'Chez IM Massage, nous plaçons votre détente et votre bien-être au cœur de nos priorités. Nos équipes dévouées et expérimentées vous offrent des soins de massage personnalisés, adaptés à vos besoins.',
  counters: [
    { value: '3K', caption: 'Patients Satisfaits' },
    { value: '7', caption: "Années d'Expérience" },
    { value: '100%', caption: 'Satisfaction Client' },
  ],
  background: '/assets/images/hero_bg_1.jpg',
}

export const servicesTestimonials = {
  heading: 'Témoignages de nos Patients',
  items: [
    {
      name: 'Marie Dupont',
      quote:
        "Les massages reçus chez IM Massage m'ont aidée à me détendre profondément. Merci à toute l'équipe pour leur attention et leur expertise.",
      image: '/assets/images/person_1.jpg',
    },
    {
      name: 'Jean Martin',
      quote:
        "Une expérience de massage incroyable. L'équipe m'a aidé à relâcher toutes mes tensions musculaires. Je recommande fortement.",
      image: '/assets/images/person_2.jpg',
    },
    {
      name: 'Sophie Lambert',
      quote:
        'IM Massage est un centre exceptionnel. Les massages thérapeutiques m’ont permis de soulager mes douleurs chroniques. Merci !',
      image: '/assets/images/person_3.jpg',
    },
    {
      name: 'Paul Girard',
      quote:
        "Grâce aux soins de qualité d'IM Massage, j'ai retrouvé énergie et sérénité. Une expérience que je recommande à tous.",
      image: '/assets/images/person_4.jpg',
    },
  ],
}

export const aboutHighlights = [
  {
    title: 'Massages personnalisés',
    description:
      'Des soins adaptés à votre profil pour des résultats durables et mesurables.',
  },
  {
    title: 'Techniques modernes',
    description:
      'Des approches innovantes associées à l’expertise traditionnelle de notre équipe.',
  },
  {
    title: 'Massages énergétiques',
    description:
      'Des méthodes dynamisantes pour rééquilibrer corps et esprit avec douceur.',
  },
  {
    title: 'Massages relaxants',
    description:
      'Offrez-vous une bulle de sérénité pour évacuer le stress quotidien.',
  },
]

export const aboutCards = [
  {
    title: 'Massages Personnalisés',
    description:
      'Découvrez des massages adaptés à vos besoins pour détendre votre corps et apaiser votre esprit.',
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Massages Thérapeutiques',
    description:
      'Soulagez vos tensions musculaires et retrouvez votre énergie grâce à nos massages ciblés.',
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Massages Energétiques',
    description:
      'Reboostez votre vitalité avec des techniques de massage conçues pour revitaliser votre corps.',
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Massages Relaxants',
    description:
      'Offrez-vous un moment de sérénité avec nos massages relaxants, idéaux pour évacuer le stress.',
    image: '/assets/images/img_1.jpg',
  },
]

export const aboutMission = {
  title: 'À propos de IM Massage',
  text:
    'IM Massage est votre partenaire de confiance en matière de détente et bien-être. Nous combinons expertise en massothérapie et techniques modernes pour vous offrir des soins personnalisés, adaptés à vos besoins spécifiques. Notre équipe dévouée est engagée à améliorer votre qualité de vie en vous proposant une large gamme de massages, allant des massages relaxants aux techniques thérapeutiques. Chaque client est au cœur de notre mission : garantir une expérience humaine, apaisante et professionnelle pour un bien-être optimal.',
}

export const medicalInfoCards = [
  {
    title: "Cas d'Urgence",
    text:
      'Nous sommes disponibles sur rendez-vous pour vous offrir des massages relaxants avec une équipe attentionnée et professionnelle.',
    icon: 'ambulance',
  },
  {
    title: "Horaires d'Ouverture",
    text: 'Lundi - Vendredi : 8h00 - 18h00 · Samedi : 8h00 - 16h00 · Dimanche : 8h00 - 13h00',
    icon: 'clock',
  },
  {
    title: 'Planning de la Clinique',
    text:
      'Planifiez vos visites facilement grâce à nos horaires flexibles et à un service patient de qualité.',
    icon: 'hospital',
  },
]

export const professionalChoice = {
  title: 'Pourquoi choisir nos massages professionnels ?',
  text:
    'Chez IM Massage, nous vous offrons bien plus qu’un simple moment de détente. Nos experts en massothérapie utilisent des techniques modernes pour vous garantir une expérience personnalisée, adaptée à vos besoins spécifiques. Que ce soit pour apaiser le stress, soulager des tensions musculaires ou revitaliser votre énergie, chaque soin est conçu pour votre bien-être.',
  image: '/assets/images/comment_vcard.jpg',
}

export const teamMembers = [
  {
    name: 'Susan Horton',
    role: 'Massothérapeute',
    description:
      'Spécialisée dans les massages relaxants avec une attention portée au soin personnalisé.',
    image: '/assets/images/person_1.jpg',
  },
  {
    name: 'Jonathan Kennedy',
    role: 'Massothérapeute',
    description:
      'Expert en techniques modernes pour aider ses clients à se détendre en profondeur.',
    image: '/assets/images/person_2.jpg',
  },
  {
    name: 'Gordon Meyer',
    role: 'Massothérapeute',
    description:
      'Réputé pour son approche douce et adaptée à chaque besoin spécifique.',
    image: '/assets/images/person_3.jpg',
  },
  {
    name: 'Doug Hale Kennedy',
    role: 'Massothérapeute',
    description:
      'Spécialiste des massages thérapeutiques et des techniques avancées.',
    image: '/assets/images/person_4.jpg',
  },
]

export const blogPosts = [
  {
    title: 'Les bienfaits du massage relaxant',
    author: 'Camille Dupont',
    date: '5 mai 2019',
    excerpt:
      "Découvrez comment les massages relaxants peuvent apaiser le corps et l'esprit pour un bien-être optimal.",
    image: '/assets/images/img_1.jpg',
  },
  {
    title: 'Pourquoi essayer un massage thérapeutique ?',
    author: 'Marie Morel',
    date: '10 avril 2022',
    excerpt:
      'Apprenez comment les massages thérapeutiques soulagent les douleurs et améliorent la posture.',
    image: '/assets/images/img_2.jpg',
  },
  {
    title: 'Prévenir les tensions musculaires',
    author: 'Nicolas Lefevre',
    date: '15 mars 2021',
    excerpt:
      'Nos conseils pour éviter les tensions musculaires grâce à des massages adaptés.',
    image: '/assets/images/img_3.jpg',
  },
  {
    title: 'Gérer le stress avec un massage',
    author: 'Sophie Martin',
    date: '20 février 2020',
    excerpt:
      'Comment les massages peuvent réduire le stress et améliorer le bien-être général.',
    image: '/assets/images/img_4.jpg',
  },
  {
    title: "L'importance des massages réguliers",
    author: 'Julien Bernard',
    date: '8 janvier 2023',
    excerpt:
      'Pourquoi il est essentiel de recevoir des massages réguliers pour rester en forme.',
    image: '/assets/images/img_3.jpg',
  },
  {
    title: 'Les avantages des massages pour la respiration',
    author: 'Camille Dubois',
    date: '12 décembre 2022',
    excerpt:
      'Des techniques qui améliorent la respiration et réduisent le stress.',
    image: '/assets/images/img_4.jpg',
  },
]

export const blogSidebar = {
  searchPlaceholder: 'Recherchez un mot-clé et appuyez sur Entrée...',
  popularPosts: [
    'Les bienfaits des massages relaxants',
    "L'importance des massages réguliers",
    'Comment éviter les tensions musculaires',
    'Techniques pour gérer le stress avec un massage',
  ],
  recentComments: [
    { name: 'Marie', post: 'Les bienfaits des massages relaxants' },
    { name: 'Jean', post: "L'importance des massages réguliers" },
    { name: 'Sophie', post: 'Comment éviter les tensions musculaires' },
    { name: 'Paul', post: 'Techniques pour gérer le stress avec un massage' },
  ],
}

export const contactDetails = {
  address: 'Hell-Ville, Nosy-Be, DIANA, MADAGASCAR',
  phone: '+261 (32) 71 900 24',
  email: 'infos@islandmanager.com',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31050.039046492377!2d48.24682443780923!3d-13.39653811705188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213c7bb16b69c5b%3A0x76e3391191f9e286!2sHell-Ville!5e0!3m2!1sen!2smg!4v1732883940208!5m2!1sen!2smg',
}

export const ctaBlock = {
  heading: "Jusqu'à 30% de réduction pour les nouveaux clients",
  description:
    'Prenez soin de vous dès aujourd’hui. Profitez de nos offres spéciales pour découvrir des massages relaxants de qualité.',
  buttonLabel: 'Contactez-nous',
  buttonHref: '/contact',
  background: '/assets/images/hero_bg_2.jpg',
}
