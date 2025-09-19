import { GraduationCap, Award, BookOpen, FileText } from 'lucide-react'

const EducationSection = () => {
  const educationData = [
    {
      degree: 'BSc (Hons) in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2021 - 2024',
      location: 'Malabe, Sri Lanka',
      description: 'Comprehensive study in software development, database management, systems analysis, and project management.',
      grade: 'General Degree',
      icon: GraduationCap
    }
  ]

  const certifications = [
    {
      title: 'Postman API Expert',
      issuer: 'Postman',
      year: '2024',
      description: 'Advanced API testing and automation certification'
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      year: '2024',
      description: 'Cloud computing fundamentals and AWS services'
    },
    {
      title: 'Microservices Architecture',
      issuer: 'Professional Certification',
      year: '2024',
      description: 'Design patterns and implementation strategies'
    },
    {
      title: 'AI Masterclass',
      issuer: 'Tech Institute',
      year: '2024',
      description: 'Machine learning and artificial intelligence concepts'
    }
  ]

  const research = {
    title: 'Enhancing G.C.E. Ordinary Level Mathematics Through Adaptive Learning in Sri Lanka',
    conference: 'ICAC 2024 - International Conference on Advanced Computing',
    year: '2024',
    description: 'Research on improving mathematics education through adaptive learning technologies and personalized learning approaches.',
    technologies: ['NLP', 'TensorFlow', 'Educational Technology', 'Adaptive Systems']
  }

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Education & Research</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic excellence and continuous learning journey
            </p>
          </div>

          {/* Degree Section */}
          <div className="mb-16 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-playfair flex items-center">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              Degree
            </h3>
            
            {educationData.map((edu, index) => (
              <div key={index} className="card-modern">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="text-lg font-semibold text-accent">{edu.period}</div>
                    <div className="px-4 py-2 bg-success/10 text-success rounded-lg font-medium">
                      {edu.grade}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mb-16 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-playfair flex items-center">
              <Award className="h-8 w-8 text-accent mr-3" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="card-modern hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-foreground">{cert.title}</h4>
                        <span className="text-sm text-primary font-medium">{cert.year}</span>
                      </div>
                      
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publication Section */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-playfair flex items-center">
              <FileText className="h-8 w-8 text-primary mr-3" />
              Research Publication
            </h3>
            
            <div className="card-modern hover:shadow-accent-glow transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h4 className="text-xl font-bold text-foreground leading-tight">
                      {research.title}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-accent font-semibold">{research.conference}</p>
                      <span className="text-primary font-medium">{research.year}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {research.description}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {research.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection