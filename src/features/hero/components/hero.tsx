import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../../../shared/ui/button'
import { useAppStore } from '../../../shared/store/app-store'
import { isMobile, isTablet, prefersReducedMotion } from '../../../shared/lib/utils'
import { Hero3DStatic } from './hero-3d'

// Lazy load 3D component for performance
const Hero3D = lazy(() => 
  import('./hero-3d').then(module => ({ default: module.Hero3D }))
)

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const { language } = useAppStore()
  
  // Determine if we should show 3D based on device capabilities
  const shouldShow3D = React.useMemo(() => {
    if (typeof window === 'undefined') return false
    return !isMobile() && !prefersReducedMotion()
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Text content based on language
  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Warma Mohamed",
      title: "Full Stack Developer",
      subtitle: "Specialized in JavaScript and Python | Creating robust and performant web solutions",
      description: "Versatile Full-Stack Developer focused on creating robust and performant web solutions. Solid expertise in front-end (React/Next.js) and back-end (Django) technologies with a meticulous and results-oriented approach.",
      cta: "View My Work",
      contact: "Get In Touch",
      scroll: "Scroll to explore"
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Warma Mohamed",
      title: "Développeur Full Stack",
      subtitle: "Spécialisé en JavaScript et Python | Création de solutions web robustes et performantes",
      description: "Développeur Full-Stack polyvalent, axé sur la création de solutions web robustes et performantes. Expertise solide dans les technologies front-end (React/Next.js) et back-end (Django) avec une approche méticuleuse et orientée résultats.",
      cta: "Voir Mon Travail",
      contact: "Me Contacter",
      scroll: "Faites défiler pour explorer"
    }
  }

  const t = content[language]

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        {shouldShow3D ? (
          <Suspense fallback={<Hero3DStatic />}>
            <Hero3D 
              enableInteraction={!isTablet()}
              enableParticles={!isMobile()}
            />
          </Suspense>
        ) : (
          <Hero3DStatic />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-2"
            >
              {t.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">{t.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-6"
            >
              {t.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-muted-foreground mb-4 text-balance"
            >
              {t.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-base text-muted-foreground mb-8 max-w-2xl text-balance"
            >
              {t.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                {t.cta}
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
              >
                {t.contact}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:mohamed.warma10@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Space for 3D Scene on larger screens */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">{t.scroll}</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 pointer-events-none" />
    </section>
  )
}
