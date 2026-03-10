export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  type: 'juridico'
  status: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'IntelliJus — Automação de Processos Jurídicos',
    description:
      'Plataforma de tecnologia desenvolvida exclusivamente para escritórios de advocacia, com automação de processos, gestão de documentos e integração de ferramentas jurídicas.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js'],
    type: 'juridico',
    status: 'Em desenvolvimento',
  },
]
