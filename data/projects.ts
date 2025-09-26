export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  type: 'web' | 'bots' | 'scraping' | 'api'
  image?: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Odds API",
    description: "an odds api, an api that returns betting data from betting games from various bookmakers.",
    technologies: ["Python", "Docker", "FastAPI", 'Redis'],
    type: 'api',
    githubUrl: 'https://github.com/robsonraphael/api_bet_odds'
  },
  {
    id: 2,
    title: "Question Survey Tiktok",
    description: "quiz questions for tiktok, and you can receive rewards.",
    technologies: ["Nextjs", "Tailwindcss", "Supabase", "Framer-motion"],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/question-survey-ttk'
  },
  {
    id: 3,
    title: "Outback",
    description: "a simple website to advertise a food delivery promotion.",
    technologies: ["Next.js", "Tailwindcss"],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/outback',
  },
  {
    id: 4,
    title: "Bot do Discord",
    description: "Sistema de automação e moderação para comunidades no Discord.",
    technologies: ["Node.js", "Discord.js", "Redis"],
    type: 'bots',
  },
  {
    id: 5,
    title: "Scraping betting data",
    description: "a complete data scraping service from betting sites for odds analysis.",
    technologies: ["Python", "Redis", 'Docker'],
    type: 'scraping',
    githubUrl: 'https://github.com/robsonraphael/api_bet_odds',
  },
  {
    id: 6,
    title: "Script agent IA",
    description: "script creation that generates scripts for videos on YouTube",
    technologies: ["Python", "google-genai", 'Docker'],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/roteiro_agent-ia'
  },
  {
    id: 7,
    title: "Scraping e-comerce",
    description: "scraping e-commerce data to analyze competitor prices.",
    technologies: ["Python", "Typing", 'Pandas', 'Beautifulsoup', 'Requests'],
    type: 'scraping',
    githubUrl: 'https://github.com/robsonraphael/scraping-mercadolivre'
  },
  {
    id: 8,
    title: "Face swap",
    description: "scraping e-commerce data to analyze competitor prices.",
    technologies: ["Python", "NumPY", 'Insightface'],
    type: 'bots',
    githubUrl: 'https://github.com/robsonraphael/face-swap-insightface'
  },
  {
    id: 9,
    title: "Scraping leads",
    description: "an leads scraping for contact the industry",
    technologies: ["Python", "Selenium", 'Beautifulsoup4', 'Pandas'],
    type: 'scraping',
    githubUrl: 'https://github.com/robsonraphael/scraping-leads-info'
  },
  {
    id: 10,
    title: "Youtube Video Cut",
    description: "a script to cut videos of different lengths.",
    technologies: ["Python", 'Click-cli', 'Pytubefix'],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/api_bet_odds'
  },
]