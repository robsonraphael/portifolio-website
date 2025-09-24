export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rungis Bot",
    description: "Bot Discord de gestion d'un Shop + D.A. Completo sistema de gerenciamento para comunidade.",
    technologies: ["Node.js", "Discord.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Wav Bot",
    description: "Lot de 2 Bot Discord, gestion/animation + assistance live et sécurité pour la communauté de Fred Wav.",
    technologies: ["Node.js", "MongoDB", "WebSocket"],
  },
  {
    id: 3,
    title: "Rede Social",
    description: "Plataforma de rede social moderna com funcionalidades avançadas de interação.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Bot do Discord",
    description: "Sistema de automação e moderação para comunidades no Discord.",
    technologies: ["Node.js", "Discord.js", "Redis"],
  }
]