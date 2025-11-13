import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Globe } from 'lucide-react'
import { Button } from '../../../shared/ui/button'
import { useAppStore } from '../../../shared/store/app-store'
import profileImage from '../../../assets/profile-photo.png'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  const { language } = useAppStore()

  const content = {
    en: {
      title: "About Me",
      intro: "Passionate Full-Stack Developer",
      description: "I'm a versatile Full-Stack Developer with a strong focus on creating robust and performant web solutions. Currently working full-time at Doonya Labs, I bring solid expertise in both front-end and back-end technologies with a meticulous and results-oriented approach.",
      highlights: [
        "🎯 Full-time Developer at Doonya Labs since October 2025",
        "💼 Previously interned at Doonya Labs, New Dawn University, and Nibatic",
        "🚀 Contributed to platforms like Blindtrust and Gallery",
        "🛠️ Specialized in React/Next.js and Django development",
        "📚 Bachelor's degree from New Dawn University",
        "🌍 Fluent in French (native) and English"
      ],
      personalInfo: {
        location: "Burkina Faso",
        age: "Born May 24, 2000",
        languages: "French (Native), English (Fluent)",
        status: "Full-time Developer"
      },
      downloadCV: "Download CV",
      qualities: {
        title: "Key Qualities",
        items: [
          "Strong analytical and problem-solving skills",
          "Team spirit and discipline",
          "Autonomous, meticulous and reliable",
          "Great willingness to learn and excellent communicator"
        ]
      }
    },
    fr: {
      title: "À Propos de Moi",
      intro: "Développeur Full-Stack Passionné",
      description: "Je suis un développeur Full-Stack polyvalent avec un fort accent sur la création de solutions web robustes et performantes. Actuellement employé à temps plein chez Doonya Labs, j'apporte une solide expertise dans les technologies front-end et back-end avec une approche méticuleuse et orientée résultats.",
      highlights: [
        "🎯 Développeur à temps plein chez Doonya Labs depuis octobre 2025",
        "💼 Précédemment stagiaire chez Doonya Labs, New Dawn University et Nibatic",
        "🚀 Contributeur aux plateformes Blindtrust et Gallery",
        "🛠️ Spécialisé en développement React/Next.js et Django",
        "📚 Licence de New Dawn University",
        "🌍 Bilingue français (natif) et anglais"
      ],
      personalInfo: {
        location: "Burkina Faso",
        age: "Né le 24 mai 2000",
        languages: "Français (Natif), Anglais (Courant)",
        status: "Développeur à temps plein"
      },
      downloadCV: "Télécharger CV",
      qualities: {
        title: "Qualités Clés",
        items: [
          "Fortes capacités d'analyse et de résolution de problèmes",
          "Esprit d'équipe et discipline",
          "Autonome, méticuleux et fiable",
          "Grande volonté d'apprendre et excellent communicateur"
        ]
      }
    }
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className={`section-padding ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-muted-foreground">{t.intro}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {t.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group"
                  onClick={() => window.open('/cv.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  {t.downloadCV}
                </Button>
              </motion.div>
            </motion.div>

            {/* Personal Info & Qualities */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Photo */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <motion.img
                    src={profileImage}
                    alt="Warma Mohamed"
                    className="w-48 h-48 rounded-full object-cover border-4 border-warma-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-warma-500/20 to-transparent" />
                </div>
              </motion.div>

              {/* Personal Information */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Personal Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{t.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{t.personalInfo.age}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{t.personalInfo.languages}</span>
                  </div>
                </div>
              </div>

              {/* Key Qualities */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.qualities.title}</h3>
                <ul className="space-y-2">
                  {t.qualities.items.map((quality, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{quality}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
