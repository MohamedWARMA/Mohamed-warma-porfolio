import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'
import { useAppStore } from '../../../shared/store/app-store'

interface ExperienceProps {
  className?: string
}

export const Experience: React.FC<ExperienceProps> = ({ className = '' }) => {
  const { language } = useAppStore()

  const content = {
    en: {
      title: "Professional Experience",
      subtitle: "My Journey in Software Development",
      education: {
        title: "Education",
        degree: "Bachelor's Degree",
        institution: "New Dawn University",
        period: "Completed"
      },
      experiences: [
        {
          company: "Doonya Labs",
          position: "Full-Time Developer",
          period: "October 2025 - Present",
          location: "Current Position",
          type: "current" as const,
          description: "Full-time developer role focusing on building scalable web applications and contributing to multiple platform development projects.",
          achievements: [
            "Continuing development of Blindtrust and Gallery platforms",
            "Leading full-stack development initiatives",
            "Mentoring junior developers and interns",
            "Implementing best practices in code architecture"
          ],
          technologies: ["React", "Next.js", "Django", "Python", "JavaScript"]
        },
        {
          company: "Doonya Labs",
          position: "Software Developer Intern",
          period: "August 2025 - October 2025",
          location: "Internship",
          type: "past" as const,
          description: "Contributed to the development of multiple platforms and created reusable development tools.",
          achievements: [
            "Contributed to Blindtrust project management platform development",
            "Developed Gallery platform for artist product sales",
            "Created Django-ReactJS Starter Kit for rapid development",
            "Built Django & Celery notification module"
          ],
          technologies: ["Django", "React", "Celery", "Python", "JavaScript"]
        },
        {
          company: "New Dawn University",
          position: "Software Developer Intern",
          period: "April 2025 - June 2025",
          location: "University Project",
          type: "past" as const,
          description: "Developed a comprehensive teacher evaluation platform for the university.",
          achievements: [
            "Built Teacher Evaluation Platform from scratch",
            "Implemented user authentication and role management",
            "Created responsive UI for multiple user types",
            "Integrated reporting and analytics features"
          ],
          technologies: ["React", "Django", "PostgreSQL", "Python"]
        },
        {
          company: "Nibatic",
          position: "Software Developer Intern",
          period: "June 2024 - August 2024",
          location: "Internship",
          type: "past" as const,
          description: "Participated in developing multiple software solutions across different domains.",
          achievements: [
            "Developed File Storage Solution with secure access controls",
            "Built Attendance Tracking System with real-time updates",
            "Created Rental Platform for Goods and Services",
            "Contributed to Enterprise Management Platform development"
          ],
          technologies: ["Python", "Django", "JavaScript", "MySQL"]
        }
      ]
    },
    fr: {
      title: "Expérience Professionnelle",
      subtitle: "Mon Parcours en Développement Logiciel",
      education: {
        title: "Formation",
        degree: "Licence (Bachelor's Degree)",
        institution: "New Dawn University",
        period: "Diplômé"
      },
      experiences: [
        {
          company: "Doonya Labs",
          position: "Développeur (Temps Plein)",
          period: "Octobre 2025 - Présent",
          location: "Poste Actuel",
          type: "current" as const,
          description: "Poste de développeur à temps plein axé sur la création d'applications web évolutives et la contribution à plusieurs projets de développement de plateformes.",
          achievements: [
            "Continuation du développement des plateformes Blindtrust et Gallery",
            "Direction d'initiatives de développement full-stack",
            "Mentorat de développeurs juniors et stagiaires",
            "Implémentation de bonnes pratiques en architecture de code"
          ],
          technologies: ["React", "Next.js", "Django", "Python", "JavaScript"]
        },
        {
          company: "Doonya Labs",
          position: "Stagiaire Développeur Logiciel",
          period: "Août 2025 - Octobre 2025",
          location: "Stage",
          type: "past" as const,
          description: "Contribution au développement de plusieurs plateformes et création d'outils de développement réutilisables.",
          achievements: [
            "Contribution au développement de la plateforme de gestion de projet Blindtrust",
            "Développement de la plateforme Gallery pour la vente de produits d'artistes",
            "Création d'un kit de démarrage Django-ReactJS pour le développement rapide",
            "Construction d'un module de notification Django & Celery"
          ],
          technologies: ["Django", "React", "Celery", "Python", "JavaScript"]
        },
        {
          company: "New Dawn University",
          position: "Stagiaire Développeur Logiciel",
          period: "Avril 2025 - Juin 2025",
          location: "Projet Universitaire",
          type: "past" as const,
          description: "Développement d'une plateforme complète d'évaluation des enseignants pour l'université.",
          achievements: [
            "Construction de la plateforme d'évaluation des enseignants de zéro",
            "Implémentation de l'authentification utilisateur et gestion des rôles",
            "Création d'une interface utilisateur responsive pour plusieurs types d'utilisateurs",
            "Intégration de fonctionnalités de reporting et d'analyse"
          ],
          technologies: ["React", "Django", "PostgreSQL", "Python"]
        },
        {
          company: "Nibatic",
          position: "Stagiaire Développeur Logiciel",
          period: "Juin 2024 - Août 2024",
          location: "Stage",
          type: "past" as const,
          description: "Participation au développement de plusieurs solutions logicielles dans différents domaines.",
          achievements: [
            "Développement d'une solution de stockage de fichiers avec contrôles d'accès sécurisés",
            "Construction d'un système de suivi des présences avec mises à jour en temps réel",
            "Création d'une plateforme de location de biens et services",
            "Contribution au développement d'une plateforme de gestion d'entreprise"
          ],
          technologies: ["Python", "Django", "JavaScript", "MySQL"]
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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className={`section-padding bg-muted/30 ${className}`}>
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

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

              {/* Experience Items */}
              {t.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-background ${
                    exp.type === 'current' 
                      ? 'bg-gradient-to-r from-warma-500 to-warma-400' 
                      : 'bg-muted-foreground'
                  }`} />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-background rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.position}
                          </h3>
                          {exp.type === 'current' && (
                            <span className="px-2 py-1 text-xs bg-gradient-to-r from-warma-500 to-warma-400 text-white rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-primary font-medium mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-background bg-gradient-to-r from-warma-600 to-warma-500" />

                {/* Education Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-background rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t.education.title}
                    </h3>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {t.education.institution}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {t.education.degree} - {t.education.period}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
