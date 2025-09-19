import { Code, Database, Cloud, Settings, Smartphone, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'PHP', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: Globe,
      color: 'accent',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Flutter', level: 75 }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'primary',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Firebase', level: 82 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Settings,
      color: 'accent',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Selenium', level: 88 },
        { name: 'Appium', level: 85 },
        { name: 'Postman', level: 92 },
        { name: 'Jira', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'primary',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Microsoft Azure', level: 75 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 82 }
      ]
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'accent',
      skills: [
        { name: 'Android (Java)', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'React Native', level: 70 }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    return color === 'primary' 
      ? { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' }
      : { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent' }
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across modern technologies and development practices
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color)
              
              return (
                <div 
                  key={categoryIndex} 
                  className="card-modern animate-slide-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 ${colors.bg} rounded-xl`}>
                      <category.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-semibold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${colors.border} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              background: category.color === 'primary' 
                                ? 'var(--gradient-primary)' 
                                : 'var(--gradient-accent)',
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 animate-fade-in-delay">
            <div className="card-modern text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-playfair">
                Professional Expertise
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Programming Languages</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Frameworks</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Databases</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Tools & Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection