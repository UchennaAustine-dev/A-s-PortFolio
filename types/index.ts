export interface NavItem {
    path: string
    name: string
  }
  
  export interface SocialLink {
    icon: React.ComponentType<{ className?: string }>
    href: string
    label: string
  }
  
  export interface ExperienceItem {
    title: string
    company: string
    date: string
    description: string
    skills: string[]
    link?: string
  }
  
  export interface ProjectItem {
    title: string
    description: string
    image: string
    link: string
    stars?: number
    technologies: string[]
  }
  
  