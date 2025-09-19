import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dushandbr@gmail.com',
      href: 'mailto:dushandbr@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 264 9109',
      href: 'tel:+94 76 264 9109'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kegalle, Sri Lanka',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@dushanblazebhagya',
      href: 'https://github.com/dushanblazebhagya'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Dushan Rathnakumara',
      href: 'https://www.linkedin.com/in/dushan-rathnakumara-130105259/'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive'
      })
      return
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    toast({
      title: 'Message sent successfully!',
      description: 'Thank you for your message. I\'ll get back to you soon.'
    })
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-playfair">
                  Let's Start a Conversation
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow developers, 
                  designers, and entrepreneurs. Whether you have a specific project in mind or just 
                  want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="text-foreground font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Connect with me:</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                        <social.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{social.label}</div>
                        <div className="text-foreground font-medium">{social.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <a href="/dushanbhagyacv.pdf" download="dushanbhagyacv.pdf">
                <Button className="btn-primary w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card-modern">
                <h3 className="text-xl font-bold text-foreground mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center animate-fade-in-delay">
            <div className="card-modern">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From concept to deployment, I'm here to help you build amazing digital experiences. 
                Let's discuss your vision and make it a reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection