import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profileImage from '@/assets/dushan-profile-new.png'

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dushanblazebhagya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dushan-rathnakumara', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dushandbr@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-pattern overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Available for hire
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-hero animate-fade-in">
                Dushan Rathnakumara
              </h1>
              <div className="text-xl md:text-2xl text-accent font-semibold animate-fade-in-delay">
                <span className="typing-animation"></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay">
              Crafting digital experiences through code, creativity, and innovation. 
              Passionate IT graduate transitioning into development with strong foundations in QA and Fullstack Development.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-in-delay">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">8+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-muted-foreground">Research Published</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <Button 
                className="btn-primary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <span className="text-muted-foreground">Follow me:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-shrink-0 animate-fade-in-delay">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                  <img 
                    src={profileImage} 
                    alt="Dushan Rathnakumara - Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            className="flex flex-col items-center cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Explore</span>
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection