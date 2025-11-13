import { useEffect } from 'react'
import { Navbar } from './features/navigation/components/navbar'
import { Hero } from './features/hero/components/hero'
import { About } from './features/about/components/about'
import { Skills } from './features/skills/components/skills'
import { Experience } from './features/experience/components/experience'
import { Contact } from './features/contact/components/contact'
import { initializeTheme, useSystemThemeListener } from './shared/store/app-store'

function App() {
  // Initialize theme on app start
  useEffect(() => {
    initializeTheme()
  }, [])

  // Listen for system theme changes
  useSystemThemeListener()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />

        

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Warma Mohamed. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
