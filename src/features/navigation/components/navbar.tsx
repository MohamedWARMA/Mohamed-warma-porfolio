import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '../../../shared/ui/button'
import { cn } from '../../../shared/lib/utils'
import { useAppStore, useMenuActions, useThemeActions, useLanguageActions } from '../../../shared/store/app-store'
import { NAVIGATION_ITEMS } from '../../../shared/constants'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { theme, language, isMenuOpen } = useAppStore()
  const { toggleMenu, setMenuOpen } = useMenuActions()
  const { setTheme } = useThemeActions()
  const { setLanguage } = useLanguageActions()

  // Close menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen, setMenuOpen])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen, setMenuOpen])

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const getThemeIcon = () => {
    // Always show sun for light mode, moon for dark mode
    return theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 glass border-b border-border/50",
          className
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#home')
                }}
                className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
              >
                Portfolio
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {/* Translate based on language */}
                  {item.labelKey === 'nav.home' && (language === 'fr' ? 'Accueil' : 'Home')}
                  {item.labelKey === 'nav.about' && (language === 'fr' ? 'À propos' : 'About')}
                  {item.labelKey === 'nav.skills' && (language === 'fr' ? 'Compétences' : 'Skills')}
                  {item.labelKey === 'nav.projects' && (language === 'fr' ? 'Projets' : 'Projects')}
                  {item.labelKey === 'nav.experience' && (language === 'fr' ? 'Expérience' : 'Experience')}
                  {item.labelKey === 'nav.contact' && (language === 'fr' ? 'Contact' : 'Contact')}
                  
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-warma-500 to-warma-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleThemeToggle}
                  className="relative"
                  aria-label="Toggle theme"
                >
                  {getThemeIcon()}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLanguageToggle}
                  className="text-xs font-medium"
                  aria-label="Toggle language"
                >
                  {language.toUpperCase()}
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
              >
                {getThemeIcon()}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="relative"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[80vw] glass border-l border-border/50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <span className="text-lg font-semibold gradient-text">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-6">
                    {NAVIGATION_ITEMS.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                      >
                        {/* Translate based on language */}
                        {item.labelKey === 'nav.home' && (language === 'fr' ? 'Accueil' : 'Home')}
                        {item.labelKey === 'nav.about' && (language === 'fr' ? 'À propos' : 'About')}
                        {item.labelKey === 'nav.skills' && (language === 'fr' ? 'Compétences' : 'Skills')}
                        {item.labelKey === 'nav.projects' && (language === 'fr' ? 'Projets' : 'Projects')}
                        {item.labelKey === 'nav.experience' && (language === 'fr' ? 'Expérience' : 'Experience')}
                        {item.labelKey === 'nav.contact' && (language === 'fr' ? 'Contact' : 'Contact')}
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'Langue' : 'Language'}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLanguageToggle}
                    >
                      {language === 'fr' ? 'Français' : 'English'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
