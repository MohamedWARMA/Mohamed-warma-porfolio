// Global TypeScript types and interfaces

export type Theme = 'light' | 'dark' | 'system'
export type Language = 'en' | 'fr'

export interface Project {
  id: string
  title: Record<Language, string>
  description: Record<Language, string>
  longDescription?: Record<Language, string>
  technologies: string[]
  category: ProjectCategory
  featured: boolean
  status: ProjectStatus
  links: {
    demo?: string
    github?: string
    case_study?: string
  }
  images: {
    thumbnail: string
    gallery?: string[]
  }
  metrics?: {
    performance?: number
    accessibility?: number
    seo?: number
  }
  date: string
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'api' 
  | 'library' 
  | 'other'

export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
  color?: string
  description?: Record<Language, string>
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'mobile' 
  | 'database' 
  | 'devops' 
  | 'design' 
  | 'tools'

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface Experience {
  id: string
  company: string
  position: Record<Language, string>
  description: Record<Language, string>
  technologies: string[]
  startDate: string
  endDate?: string
  current: boolean
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
}

export interface Education {
  id: string
  institution: string
  degree: Record<Language, string>
  field: Record<Language, string>
  startDate: string
  endDate: string
  grade?: string
  description?: Record<Language, string>
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  color?: string
}

export interface SEOData {
  title: Record<Language, string>
  description: Record<Language, string>
  keywords: Record<Language, string[]>
  ogImage?: string
  canonical?: string
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

// Store types
export interface AppState {
  theme: Theme
  language: Language
  isMenuOpen: boolean
  isLoading: boolean
  error: string | null
}

export interface AppActions {
  setTheme: (theme: Theme) => void
  setLanguage: (language: Language) => void
  toggleMenu: () => void
  setMenuOpen: (open: boolean) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

// Utility types
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// API types
export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Animation types
export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
  stagger?: number
}

export interface ScrollAnimationConfig extends AnimationConfig {
  threshold: number
  rootMargin: string
}

// 3D Scene types
export interface Scene3DProps {
  enableInteraction?: boolean
  enableParticles?: boolean
  particleCount?: number
  cameraPosition?: [number, number, number]
  autoRotate?: boolean
  responsive?: boolean
}

export interface GeometryConfig {
  type: 'sphere' | 'box' | 'torus' | 'plane' | 'cylinder'
  args: number[]
  material: {
    color: string
    metalness?: number
    roughness?: number
    emissive?: string
  }
  animation?: {
    rotation?: boolean
    position?: boolean
    scale?: boolean
  }
}
