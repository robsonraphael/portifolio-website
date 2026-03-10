export interface Skill {
  name: string
  icon: string
  iconType: 'emoji' | 'svg'
}

export const skills: Skill[] = [
  { name: 'Python', icon: '/icons/python.svg', iconType: 'svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', iconType: 'svg' },
  { name: 'WhatsApp API', icon: '💬', iconType: 'emoji' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg', iconType: 'svg' },
  { name: 'PostgreSQL', icon: '/icons/mysql.svg', iconType: 'svg' },
  { name: 'Docker', icon: '/icons/docker.svg', iconType: 'svg' },
]
