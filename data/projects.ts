export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  type: 'web' | 'bots' | 'scraping' // ← Adicione esta linha
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
    type: 'bots', // ← Adicione o tipo
  },
  {
    id: 2,
    title: "Wav Bot",
    description: "Lot de 2 Bot Discord, gestion/animation + assistance live et sécurité pour la communauté de Fred Wav.",
    technologies: ["Node.js", "MongoDB", "WebSocket"],
    type: 'bots', // ← Adicione o tipo
  },
  {
    id: 3,
    title: "Rede Social",
    description: "Plataforma de rede social moderna com funcionalidades avançadas de interação.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    type: 'web', // ← Adicione o tipo
  },
  {
    id: 4,
    title: "Bot do Discord",
    description: "Sistema de automação e moderação para comunidades no Discord.",
    technologies: ["Node.js", "Discord.js", "Redis"],
    type: 'bots', // ← Adicione o tipo
  },
  {
    id: 5,
    title: "Scraping de Dados",
    description: "Sistema de coleta e análise de dados de múltiplas fontes.",
    technologies: ["Python", "Selenium", "Pandas"],
    type: 'scraping', // ← Adicione o tipo
  }
]