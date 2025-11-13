import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Copy } from 'lucide-react'
import { Button } from '../../../shared/ui/button'
import { useAppStore } from '../../../shared/store/app-store'

interface ContactProps {
  className?: string
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const { language } = useAppStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project or opportunity",
      description: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      contactInfo: {
        title: "Contact Information",
        email: "mohamed.warma10@gmail.com",
        phone: "+226 75 46 13 77 / +226 79 48 92 02",
        location: "Burkina Faso"
      },
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email address",
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: "Tell me about your project or inquiry..."
      },
      references: {
        title: "Professional References",
        items: [
          {
            name: "Saliou ALIOU",
            title: "Lecturer & Researcher",
            phone: "+226 77 77 92 14",
            email: "salihou.aliou@u-auben.com"
          },
          {
            name: "Lucien BONDE",
            title: "Head of Development Unit, U-AUBEN",
            phone: "+226 77 30 21 30",
            email: "Contact via phone"
          }
        ]
      },
      downloadCV: "Download CV",
      socialLinks: "Connect with me"
    },
    fr: {
      title: "Contactez-Moi",
      subtitle: "Discutons de votre prochain projet ou opportunité",
      description: "Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
      contactInfo: {
        title: "Informations de Contact",
        email: "mohamed.warma10@gmail.com",
        phone: "+226 75 46 13 77 / +226 79 48 92 02",
        location: "Burkina Faso"
      },
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        subject: "Sujet",
        message: "Votre Message",
        send: "Envoyer le Message",
        namePlaceholder: "Entrez votre nom complet",
        emailPlaceholder: "Entrez votre adresse email",
        subjectPlaceholder: "De quoi s'agit-il ?",
        messagePlaceholder: "Parlez-moi de votre projet ou demande..."
      },
      references: {
        title: "Références Professionnelles",
        items: [
          {
            name: "Saliou ALIOU",
            title: "Enseignant & Chercheur",
            phone: "+226 77 77 92 14",
            email: "salihou.aliou@u-auben.com"
          },
          {
            name: "Lucien BONDE",
            title: "Chef de l'Unité de Développement, U-AUBEN",
            phone: "+226 77 30 21 30",
            email: "Contact via téléphone"
          }
        ]
      },
      downloadCV: "Télécharger CV",
      socialLinks: "Connectez-vous avec moi"
    }
  }

  const t = content[language]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert(language === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.')
      return
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || (language === 'fr' ? 'Contact depuis le Portfolio' : 'Contact from Portfolio'))
    const body = encodeURIComponent(
      `${language === 'fr' ? 'Nom' : 'Name'}: ${formData.name}\n${language === 'fr' ? 'Email' : 'Email'}: ${formData.email}\n\n${language === 'fr' ? 'Message' : 'Message'}:\n${formData.message}`
    )
    
    // Try to open mailto link
    const mailtoLink = `mailto:mohamed.warma10@gmail.com?subject=${subject}&body=${body}`
    
    try {
      window.location.href = mailtoLink
      // Show success message
      alert(language === 'fr' 
        ? 'Votre client email va s\'ouvrir. Si cela ne fonctionne pas, copiez l\'email: mohamed.warma10@gmail.com' 
        : 'Your email client will open. If it doesn\'t work, copy the email: mohamed.warma10@gmail.com'
      )
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText('mohamed.warma10@gmail.com').then(() => {
        alert(language === 'fr' 
          ? 'Email copié dans le presse-papiers: mohamed.warma10@gmail.com' 
          : 'Email copied to clipboard: mohamed.warma10@gmail.com'
        )
      })
    }
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('mohamed.warma10@gmail.com').then(() => {
      alert(language === 'fr' 
        ? 'Email copié dans le presse-papiers !' 
        : 'Email copied to clipboard!'
      )
    }).catch(() => {
      alert(language === 'fr' 
        ? 'Impossible de copier. Email: mohamed.warma10@gmail.com' 
        : 'Could not copy. Email: mohamed.warma10@gmail.com'
      )
    })
  }

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
    <section id="contact" className={`section-padding ${className}`}>
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
            <p className="text-xl text-muted-foreground mb-4">{t.subtitle}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.description}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.form.subjectPlaceholder}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.form.messagePlaceholder}
                    rows={6}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" variant="gradient" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {t.form.send}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & References */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.contactInfo.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <a 
                        href="mailto:mohamed.warma10@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t.contactInfo.email}
                      </a>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmailToClipboard}
                      className="ml-2 h-8 w-8 p-0"
                      aria-label="Copy email"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{t.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{t.contactInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links & CV */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.socialLinks}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-background rounded-md hover:bg-accent transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-background rounded-md hover:bg-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open('/cv.pdf', '_blank')}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t.downloadCV}
                </Button>
              </div>

              {/* Professional References */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.references.title}</h3>
                <div className="space-y-4">
                  {t.references.items.map((ref, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-medium">{ref.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{ref.title}</p>
                      <p className="text-sm text-muted-foreground">{ref.phone}</p>
                      <p className="text-sm text-muted-foreground">{ref.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Contact }
