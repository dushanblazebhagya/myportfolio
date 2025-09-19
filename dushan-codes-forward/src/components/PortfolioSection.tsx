import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PortfolioSection = () => {
  const projects = [
    {
      title: 'LLM-CVChatBot',
      description: 'Developed an LLM CV ChatBot with Gmail integration and React/Next.js frontend for resume queries and notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'MCP', 'FastAPI', 'OpenAI GPT Models', ' aiosmtplib', 'JSON'],
      category: 'AI/ML',
      featured: true,
      links: {
        live: 'https://github.com/dushanblazebhagya/LLM-CVChatBot.git',
        github: 'https://github.com/dushanblazebhagya/LLM-CVChatBot.git'
      }
    },
    {
      title: 'Inventory Management App',
      description: 'Built a cross-platform Inventory App with Dart frontend and C++ backend for real-time stock tracking and fast, user-friendly management.',
      image: '/api/placeholder/600/400',
      technologies: ['Dart', 'C++'],
      category: 'AI/ML',
      featured: true,
      links: {
        live: 'https://github.com/dushanblazebhagya/LLM-CVChatBot.git',
        github: 'https://github.com/dushanblazebhagya/LLM-CVChatBot.git'
      }
    },
    {
      title: '3D Visualization System for Math Learning',
      description: 'Interactive learning platform using NLP and 3D visualization to enhance G.C.E. Ordinary Level Mathematics education in Sri Lanka.',
      image: '/api/placeholder/600/400',
      technologies: ['NLP', 'TensorFlow', 'Dart', '3D Graphics', 'Machine Learning'],
      category: 'AI/ML',
      featured: true,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Social Media Platform for Food Reviews',
      description: 'Full-stack social platform where users can share and discover food reviews with real-time interactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      category: 'Full Stack',
      featured: true,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Ocean Protection Web App',
      description: 'Environmental awareness platform built with MERN stack to promote ocean conservation efforts.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'MERN Stack',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Voting App',
      description: 'Modern online polling application with real-time results and secure authentication.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'Web App',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Citizen Info Management System',
      description: 'Comprehensive citizen data management system with secure authentication and role-based access.',
      image: '/api/placeholder/600/400',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'MERN Stack',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Hotel Reservation Android App',
      description: 'Mobile application for hotel booking with real-time availability and secure payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Firebase', 'Android SDK', 'Material Design'],
      category: 'Mobile',
      featured: false,
      links: {
        live: 'https://github.com/dushanblazebhagya/MAD.git',
        github: 'https://github.com/dushanblazebhagya/MAD.git'
      }
    },
    {
      title: 'Hotel Management System',
      description: 'Complete hotel management solution with booking, room management, and reporting features.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Bootstrap', 'MySQL', 'Servlet'],
      category: 'Desktop',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Vehicle Insurance Management System',
      description: 'Insurance management platform with policy tracking, claims processing, and customer management.',
      image: '/api/placeholder/600/400',
      technologies: ['PHP', 'HTML/CSS', 'MySQL', 'JavaScript'],
      category: 'Web App',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    }
  ]

  const categories = ['All', 'Featured', 'AI/ML', 'Full Stack', 'MERN Stack', 'Web App', 'Mobile', 'Desktop']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Featured') return project.featured
    return project.category === activeCategory
  })

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gradient">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions across various technologies and domains
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="card-modern group cursor-pointer overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <Eye className="h-12 w-12 text-primary/50" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-300"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 transition-transform duration-300"
                      aria-label="View Source Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-fade-in-delay">
            <Button className="btn-outline">
              View All Projects
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-delay">
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
            
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Featured Projects</div>
            </div>
            
            <div className="text-center card-modern">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection