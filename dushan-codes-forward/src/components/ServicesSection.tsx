import { Code, Layers, TestTube, Bot, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating modern, responsive websites that deliver exceptional user experiences across all devices.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Best Practices',
        'Modern UI/UX'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'primary'
    },
    {
      icon: Layers,
      title: 'Fullstack Development',
      description: 'Building scalable applications with comprehensive backend and frontend solutions.',
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication Systems',
        'Real-time Features'
      ],
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'PostgreSQL'],
      color: 'accent'
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Ensuring quality software through comprehensive testing strategies and automation.',
      features: [
        'Manual Testing',
        'Automated Testing',
        'API Testing',
        'Performance Testing'
      ],
      technologies: ['Selenium', 'Appium', 'Postman', 'Jest'],
      color: 'primary'
    },
    {
      icon: Bot,
      title: 'LLM Development',
      description: 'Building AI-powered solutions using large language models for intelligent applications.',
      features: [
        'AI Integration',
        'Natural Language Processing',
        'Chatbot Development',
        'Machine Learning'
      ],
      technologies: ['TensorFlow', 'OpenAI API', 'Python', 'NLP', 'MCP', 'FastAPI'],
      color: 'accent'
    }
  ]

  const getColorClasses = (color: string) => {
    return color === 'primary' 
      ? { 
          bg: 'bg-primary/10', 
          text: 'text-primary', 
          border: 'border-primary',
          gradient: 'from-primary to-primary-glow',
          hover: 'hover:shadow-glow'
        }
      : { 
          bg: 'bg-accent/10', 
          text: 'text-accent', 
          border: 'border-accent',
          gradient: 'from-accent to-accent-glow',
          hover: 'hover:shadow-accent-glow'
        }
  }

  return (
    <section id="services" className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your digital vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color)
              
              return (
                <div 
                  key={index}
                  className={`card-modern group cursor-pointer ${colors.hover} transition-all duration-500 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 ${colors.bg} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Let's discuss your project
                    </span>
                    <ArrowRight className={`h-5 w-5 ${colors.text} group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Process Overview */}
          <div className="mt-16 animate-fade-in-delay">
            <div className="card-modern">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground font-playfair mb-4">
                  My Development Process
                </h3>
                <p className="text-muted-foreground">
                  A systematic approach to delivering exceptional results
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                  { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
                  { step: '03', title: 'Development', desc: 'Building with best practices and quality' },
                  { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
                ].map((process, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-foreground">{process.title}</h4>
                    <p className="text-sm text-muted-foreground">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection