import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      period: 'Feb 2025 - Present',
      location: 'Sri Lanka',
      type: 'Freelance',
      status: 'current',
      description: 'Providing comprehensive web development services to clients, building modern and responsive web applications.',
      achievements: [
        'Built 5+ custom web applications using modern technologies',
        'Specialized in React, Next.js, and MERN stack development',
        'Delivered projects with 100% client satisfaction rate',
        'Implemented responsive designs and performance optimization'
      ]
    },
    {
      title: 'Associate QA Engineer',
      company: 'ABi Systems',
      period: 'Jun 2024 - Feb 2025',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      status: 'past',
      description: 'Advanced QA role focusing on comprehensive testing strategies, automation, and quality assurance leadership.',
      achievements: [
        'Led testing initiatives for multiple software projects',
        'Developed automated testing frameworks using Selenium and Appium',
        'Improved bug detection rate by 40% through comprehensive test planning',
        'Mentored junior QA engineers and established testing best practices',
        'Collaborated with development teams to implement CI/CD testing pipelines'
      ]
    },
    {
      title: 'Intern QA Engineer',
      company: 'ABi Systems',
      period: 'Dec 2023 - Jun 2024',
      location: 'Colombo, Sri Lanka',
      type: 'Internship',
      status: 'past',
      description: 'Gained hands-on experience in software testing, quality assurance processes, and bug tracking systems.',
      achievements: [
        'Executed manual testing for web applications and APIs',
        'Created detailed test cases and documentation',
        'Performed regression testing and user acceptance testing',
        'Used tools like Jira, Postman, and Selenium WebDriver',
        'Contributed to improving overall product quality and user experience'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience and continuous growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`flex items-center animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10">
                    <div className={`w-full h-full rounded-full ${
                      exp.status === 'current' ? 'bg-accent animate-pulse' : 'bg-primary'
                    }`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="card-modern group hover:shadow-glow transition-all duration-500">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.status === 'current' 
                              ? 'bg-accent/10 text-accent' 
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {exp.type}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-lg font-semibold text-primary">
                            {exp.company}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay">
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-muted-foreground">Companies Worked With</div>
            </div>
            
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection