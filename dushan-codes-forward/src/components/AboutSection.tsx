import { CheckCircle, Code, TestTube, Lightbulb, Target } from 'lucide-react'

const AboutSection = () => {
  const strengths = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Strong foundation in multiple programming languages and frameworks'
    },
    {
      icon: TestTube,
      title: 'Quality Assurance',
      description: 'Meticulous attention to detail with comprehensive testing experience'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creative problem-solving with a passion for emerging technologies'
    },
    {
      icon: Target,
      title: 'Adaptability',
      description: 'Quick learner transitioning from QA to development with determination'
    }
  ]

  const highlights = [
    'BSc (Hons) in Information Technology Graduate',
    'Practical QA Engineering Experience',
    'Published Research Author',
    'AWS & Cloud Technology Certified',
    'Fullstack Development Expertise'
  ]

  return (
    <section id="about" className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and committed to excellence in software development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Main Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-playfair">
                  Building the Future, One Line of Code at a Time
                </h3>
                
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    I am a dedicated and diligent professional who has recently graduated with a 
                    <span className="text-primary font-semibold"> BSc (Hons) Degree in Information Technology</span> from 
                    the Sri Lanka Institute of Information Technology in Malabe.
                  </p>
                  
                  <p>
                    I have gained practical experience as an <span className="text-accent font-semibold">Intern QA Engineer</span> and 
                    <span className="text-accent font-semibold"> Associate QA at ABi Systems</span>, where I developed strong skills 
                    in software testing and quality assurance.
                  </p>
                  
                  <p>
                    Currently, I am transitioning into a development career, eager to apply my technical skills 
                    and continue learning while building innovative solutions that make a difference.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Key Highlights</h4>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-delay">
              {strengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="card-modern group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      <strength.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="mt-16 text-center animate-fade-in-delay">
            <div className="max-w-4xl mx-auto card-modern">
              <blockquote className="text-xl md:text-2xl text-foreground font-medium font-playfair italic">
                "Quality is not an act, it is a habit. In both QA and development, 
                I believe in building excellence into every line of code."
              </blockquote>
              <cite className="text-primary font-semibold mt-4 block">- Dushan Rathnakumara</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection