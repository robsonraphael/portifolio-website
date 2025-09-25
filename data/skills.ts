import { StaticImageData } from 'next/image'

export interface Skill {
  name: string
  icon: string
  iconType: 'emoji' | 'svg'
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: '/icons/javascript.svg', iconType: 'svg' },
  { name: "TypeScript", icon: '/icons/typescript.svg', iconType: 'svg' },
  { name: "Node.js", icon: '/icons/nodejs.svg', iconType: 'svg' },
  { name: "React", icon: '/icons/react.svg', iconType: 'svg' },
  { name: "Next.js", icon: '/icons/nextjs.svg', iconType: 'svg' },
  { name: "NPM", icon: '/icons/npm.svg', iconType: 'svg' },
  { name: "Tailwind", icon: '/icons/tailwind.svg', iconType: 'svg' },
  { name: "Redis", icon: '/icons/redis.svg', iconType: 'svg' },
  { name: "Postman", icon: '/icons/postman.svg', iconType: 'svg' },
  { name: "HTML5", icon: '/icons/html-5.svg', iconType: 'svg' },
  { name: "CSS", icon: '/icons/css.svg', iconType: 'svg' },
  { name: "PostgreSQL", icon: '/icons/mysql.svg', iconType: 'svg' },
  { name: "Git", icon: '/icons/git.svg', iconType: 'svg' },
  { name: "Docker", icon: '/icons/docker.svg', iconType: 'svg' },
  { name: "FastAPI", icon: '/icons/fastapi.svg', iconType: 'svg' },
  { name: "Python", icon: '/icons/python.svg', iconType: 'svg' },
  { name: 'Github', icon: '/icons/github.svg', iconType: 'svg' },
  { name: "VSCode", icon: '/icons/vscode.svg', iconType: 'svg' },
  { name: "Yarn", icon: '/icons/yarn.svg', iconType: 'svg' },
  { name: "Figma", icon: '/icons/figma.svg', iconType: 'svg' },
]