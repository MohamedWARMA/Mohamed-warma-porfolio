import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, GitBranch, Wrench, Zap } from 'lucide-react'
import { useAppStore } from '../../../shared/store/app-store'

interface SkillsProps {
  className?: string
}

export const Skills: React.FC<SkillsProps> = ({ className = '' }) => {
  const { language } = useAppStore()

  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "Technologies & Tools I Work With",
      categories: [
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Front-End Development",
          skills: ["JavaScript", "HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
          color: "from-warma-500 to-warma-400"
        },
        {
          icon: <Code className="h-6 w-6" />,
          title: "Back-End Development",
          skills: ["Python", "JavaScript", "Django", "SQL"],
          color: "from-warma-600 to-warma-500"
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Databases",
          skills: ["MySQL", "PostgreSQL"],
          color: "from-purple-500 to-violet-500"
        },
        {
          icon: <GitBranch className="h-6 w-6" />,
          title: "Version Control & Containerization",
          skills: ["Git", "GitHub", "Docker"],
          color: "from-orange-500 to-red-500"
        },
        {
          icon: <Wrench className="h-6 w-6" />,
          title: "Additional Skills",
          skills: ["Redux", "Redux Query", "Zod", "ShadCN", "Swagger", "Postman", "Repository Pattern"],
          color: "from-warma-400 to-warma-300"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Soft Skills",
          skills: ["Problem Solving", "Team Collaboration", "Communication", "Autonomous Work", "Continuous Learning"],
          color: "from-indigo-500 to-blue-500"
        }
      ]
    },
    fr: {
      title: "Compétences Techniques",
      subtitle: "Technologies et Outils que j'utilise",
      categories: [
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Développement Front-End",
          skills: ["JavaScript", "HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
          color: "from-warma-500 to-warma-400"
        },
        {
          icon: <Code className="h-6 w-6" />,
          title: "Développement Back-End",
          skills: ["Python", "JavaScript", "Django", "SQL"],
          color: "from-warma-600 to-warma-500"
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Bases de Données",
          skills: ["MySQL", "PostgreSQL"],
          color: "from-purple-500 to-violet-500"
        },
        {
          icon: <GitBranch className="h-6 w-6" />,
          title: "Contrôle de Version & Conteneurisation",
          skills: ["Git", "GitHub", "Docker"],
          color: "from-orange-500 to-red-500"
        },
        {
          icon: <Wrench className="h-6 w-6" />,
          title: "Compétences Additionnelles",
          skills: ["Redux", "Redux Query", "Zod", "ShadCN", "Swagger", "Postman", "Repository Pattern"],
          color: "from-warma-400 to-warma-300"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Compétences Douces",
          skills: ["Résolution de Problèmes", "Collaboration d'Équipe", "Communication", "Travail Autonome", "Apprentissage Continu"],
          color: "from-indigo-500 to-blue-500"
        }
      ]
    }
  }

  const t = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className={`section-padding bg-muted/30 ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.categories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border/50 h-full hover:shadow-md transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 p-6 bg-background rounded-lg border border-border/50"
          >
            <p className="text-muted-foreground">
              {language === 'fr' 
                ? "Toujours en apprentissage et ouvert aux nouvelles technologies et défis !"
                : "Always learning and open to new technologies and challenges!"
              }
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
