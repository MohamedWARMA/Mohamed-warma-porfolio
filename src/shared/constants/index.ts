import type { Language, Project, Skill, Experience, SocialLink, SEOData } from '../types'

// Application constants
export const APP_CONFIG = {
  name: 'Portfolio',
  version: '1.0.0',
  author: 'Your Name',
  email: 'your.email@example.com',
  url: 'https://yourportfolio.com',
  repository: 'https://github.com/yourusername/portfolio'
} as const

// Theme constants
export const THEME_CONFIG = {
  defaultTheme: 'system' as const,
  storageKey: 'portfolio-theme',
  transitionDuration: 300
} as const

// Language constants
export const LANGUAGE_CONFIG = {
  defaultLanguage: 'en' as Language,
  storageKey: 'portfolio-language',
  supportedLanguages: ['en', 'fr'] as Language[]
} as const

// Animation constants
export const ANIMATION_CONFIG = {
  defaultDuration: 0.6,
  defaultEasing: 'easeInOut',
  staggerDelay: 0.1,
  scrollThreshold: 0.1,
  reducedMotionQuery: '(prefers-reduced-motion: reduce)'
} as const

// Breakpoints (matching Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

// Navigation items
export const NAVIGATION_ITEMS = [
  { id: 'home', href: '#home', labelKey: 'nav.home' },
  { id: 'about', href: '#about', labelKey: 'nav.about' },
  { id: 'skills', href: '#skills', labelKey: 'nav.skills' },
  { id: 'projects', href: '#projects', labelKey: 'nav.projects' },
  { id: 'experience', href: '#experience', labelKey: 'nav.experience' },
  { id: 'contact', href: '#contact', labelKey: 'nav.contact' }
] as const

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
    color: '#333'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
    color: '#0077B5'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
    color: '#1DA1F2'
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail',
    color: '#EA4335'
  }
]

// Skills data
export const SKILLS: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'expert',
    icon: 'react',
    color: '#61DAFB'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'expert',
    icon: 'typescript',
    color: '#3178C6'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: 'nextjs',
    color: '#000000'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'expert',
    icon: 'tailwind',
    color: '#06B6D4'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 'advanced',
    icon: 'framer',
    color: '#0055FF'
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: 'frontend',
    level: 'intermediate',
    icon: 'threejs',
    color: '#000000'
  },
  
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: 'nodejs',
    color: '#339933'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'advanced',
    icon: 'python',
    color: '#3776AB'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'advanced',
    icon: 'postgresql',
    color: '#336791'
  },
  
  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'expert',
    icon: 'git',
    color: '#F05032'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
    icon: 'docker',
    color: '#2496ED'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'advanced',
    icon: 'figma',
    color: '#F24E1E'
  }
]

// Projects data
export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: {
      en: 'E-commerce Platform',
      fr: 'Plateforme E-commerce'
    },
    description: {
      en: 'A modern e-commerce platform built with Next.js and Stripe',
      fr: 'Une plateforme e-commerce moderne construite avec Next.js et Stripe'
    },
    longDescription: {
      en: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment processing. Built with modern technologies for optimal performance and user experience.',
      fr: 'Une plateforme e-commerce complète avec authentification utilisateur, gestion des produits, panier d\'achat et traitement des paiements. Construite avec des technologies modernes pour des performances optimales et une expérience utilisateur exceptionnelle.'
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    category: 'web-app',
    featured: true,
    status: 'completed',
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/yourusername/ecommerce',
      case_study: '/projects/ecommerce'
    },
    images: {
      thumbnail: '/images/projects/ecommerce-thumb.jpg',
      gallery: [
        '/images/projects/ecommerce-1.jpg',
        '/images/projects/ecommerce-2.jpg',
        '/images/projects/ecommerce-3.jpg'
      ]
    },
    metrics: {
      performance: 95,
      accessibility: 98,
      seo: 92
    },
    date: '2024-01-15'
  },
  {
    id: 'project-2',
    title: {
      en: 'Task Management App',
      fr: 'Application de Gestion de Tâches'
    },
    description: {
      en: 'A collaborative task management application with real-time updates',
      fr: 'Une application collaborative de gestion de tâches avec mises à jour en temps réel'
    },
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'web-app',
    featured: true,
    status: 'completed',
    links: {
      demo: 'https://tasks.example.com',
      github: 'https://github.com/yourusername/task-manager'
    },
    images: {
      thumbnail: '/images/projects/tasks-thumb.jpg'
    },
    date: '2023-11-20'
  },
  {
    id: 'project-3',
    title: {
      en: 'Weather Dashboard',
      fr: 'Tableau de Bord Météo'
    },
    description: {
      en: 'A beautiful weather dashboard with interactive charts and forecasts',
      fr: 'Un magnifique tableau de bord météo avec graphiques interactifs et prévisions'
    },
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    category: 'web-app',
    featured: false,
    status: 'completed',
    links: {
      demo: 'https://weather.example.com',
      github: 'https://github.com/yourusername/weather-dashboard'
    },
    images: {
      thumbnail: '/images/projects/weather-thumb.jpg'
    },
    date: '2023-09-10'
  }
]

// Experience data
export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company Inc.',
    position: {
      en: 'Senior Frontend Developer',
      fr: 'Développeur Frontend Senior'
    },
    description: {
      en: 'Led the development of modern web applications using React and TypeScript. Mentored junior developers and established best practices for the team.',
      fr: 'Dirigé le développement d\'applications web modernes utilisant React et TypeScript. Encadré les développeurs juniors et établi les meilleures pratiques pour l\'équipe.'
    },
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    startDate: '2022-01-15',
    current: true,
    location: 'San Francisco, CA',
    type: 'full-time'
  },
  {
    id: 'exp-2',
    company: 'Startup XYZ',
    position: {
      en: 'Full Stack Developer',
      fr: 'Développeur Full Stack'
    },
    description: {
      en: 'Developed and maintained multiple web applications from concept to deployment. Worked closely with designers and product managers to deliver high-quality solutions.',
      fr: 'Développé et maintenu plusieurs applications web du concept au déploiement. Travaillé en étroite collaboration avec les designers et chefs de produit pour livrer des solutions de haute qualité.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    current: false,
    location: 'Remote',
    type: 'full-time'
  }
]

// SEO data
export const SEO_DATA: SEOData = {
  title: {
    en: 'Your Name - Full Stack Developer',
    fr: 'Votre Nom - Développeur Full Stack'
  },
  description: {
    en: 'Full Stack Developer specializing in React, TypeScript, and modern web technologies. Creating exceptional digital experiences.',
    fr: 'Développeur Full Stack spécialisé en React, TypeScript et technologies web modernes. Création d\'expériences numériques exceptionnelles.'
  },
  keywords: {
    en: ['full stack developer', 'react developer', 'typescript', 'web development', 'frontend', 'backend'],
    fr: ['développeur full stack', 'développeur react', 'typescript', 'développement web', 'frontend', 'backend']
  },
  ogImage: '/images/og-image.jpg'
}

// Contact form validation
export const CONTACT_FORM_CONFIG = {
  maxNameLength: 100,
  maxSubjectLength: 200,
  maxMessageLength: 1000,
  minMessageLength: 10
} as const

// Performance thresholds
export const PERFORMANCE_CONFIG = {
  imageOptimization: {
    quality: 85,
    formats: ['webp', 'jpg'],
    sizes: [640, 768, 1024, 1280, 1920]
  },
  lazyLoading: {
    rootMargin: '50px',
    threshold: 0.1
  },
  animations: {
    reducedMotionFallback: true,
    intersectionThreshold: 0.1
  }
} as const

// Error messages
export const ERROR_MESSAGES = {
  en: {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    validation: 'Please check your input and try again.',
    notFound: 'The requested resource was not found.',
    unauthorized: 'You are not authorized to perform this action.'
  },
  fr: {
    generic: 'Une erreur s\'est produite. Veuillez réessayer.',
    network: 'Erreur réseau. Veuillez vérifier votre connexion.',
    validation: 'Veuillez vérifier votre saisie et réessayer.',
    notFound: 'La ressource demandée n\'a pas été trouvée.',
    unauthorized: 'Vous n\'êtes pas autorisé à effectuer cette action.'
  }
} as const
