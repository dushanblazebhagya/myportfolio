import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dushanblazebhagya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dushan-rathnakumara-130105259/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dushandbr@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl font-bold font-playfair text-gradient">
                  DR
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Dushan Rathnakumara</h3>
                  <p className="text-accent font-medium">Developer | QA Engineer | Innovator</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions and delivering exceptional 
                user experiences through clean code and thoughtful design.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:dushandbr@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    dushandbr@gmail.com.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a 
                    href="tel:+94771234567"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +94 76 264 9109
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Kegalle, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Dushan Rathnakumara. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start mt-1">
                Made with <Heart className="h-4 w-4 text-accent mx-1" /> using React & TypeScript
              </p>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional Links */}
          <div className="pt-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer