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
    title: "Bot para grupo de apostas",
    description: "Um bot desenvolvido para gerenciar grupos de apostas em plataformas como Telegram e Discord, oferecendo funcionalidades como envio automático de dicas, gerenciamento de membros e estatísticas de desempenho.",
    technologies: ["Python", "telegram-bot", "FastAPI", "Docker"],
    type: 'bots',
    githubUrl: '#'
  },
  {
    id: 2,
    title: "Scraper Affiliado Mercado Livre",
    description: "Scraper para gerar links de afiliados do mercado livre automaticamente via discord bot.",
    technologies: ["Python", "Playwright", "Supabase"],
    type: 'bots',
    githubUrl: '#',
  },
  {
    id: 3,
    title: "Luiza Bot Oferta",
    description: "Um bot que monitora ofertas em diversos sites como mercado livre, shoppe, amazon etc",
    technologies: ["Python", "Supabase", "Telegram-bot", 'Docker'],
    type: 'bots',
    githubUrl: '#',
  },
  {
    id: 4,
    title: "Bot roterista IA",
    description: "Um bot que envia roteiros personalizados para vídeos no YouTube, utilizando a API do Google GenAI para gerar conteúdo envolvente e relevante com base em temas fornecidos pelos usuários. e cron para agendamento do script.",
    technologies: ["Python", "google-genai", 'Docker', "Telegram-bot"],
    type: 'web',
    githubUrl: '#'
  },
  {
    id: 5,
    title: "Achadinho Delas Collector - Scraper",
    description: "pipeline completo de scraper. Desenvolvido para lidar com sites dinâmicos (SPA) e renderização de JavaScript, ele automatiza a coleta de [Tipo de Dado: Ex: preços, produto, imagems] de plataformas de e-commerce como Mercado Livre.",
    technologies: ["Python", "Playwright", 'Supabase'],
    type: 'scraping',
    githubUrl: '#'
  },
  {
    id: 6,
    title: "Scraper de casas de apostas",
    description: "scraper de diversas casas de apostas para coleta de odds e eventos.",
    technologies: ["Python", "playwright", 'supabase'],
    type: 'bots',
    githubUrl: '#'
  },
  {
    id: 7,
    title: "Scraper leads voltado para marketing",
    description: "Uma raspagem de dados de pontos comerciais proximos para popular leads e possiveis x1 clientes.",
    technologies: ["Python", "Selenium", 'Beautifulsoup4', 'Pandas'],
    type: 'scraping',
    githubUrl: '#'
  },
  {
    id: 8,
    title: "Youtube Video Cut",
    description: "Uma ferramenta eficiente para automação de conteúdo. Baixe vídeos do YouTube e extraia múltiplos cortes com durações aleatórias",
    technologies: ["Python", 'Click-cli', 'Pytubefix'],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/youtube_video_cuts'
  },
    {
    id: 9,
    title: "Youtube Video Transcriber",
    description: "Uma ferramenta eficiente para automação de conteúdo. Baixe vídeos do YouTube e extraia transcrições de áudio.",
    technologies: ["Python", "ffmpeg", 'Pytubefix', 'Whisper OpenAI'],
    type: 'web',
    githubUrl: 'https://github.com/robsonraphael/video_transcription'
  },
    {
    id: 10,
    title: "Scraper de vagas de emprego - Info Jobs",
    description: "um scraper de vagas de emprego do Info Jobs.",
    technologies: ["Python", "Selenium", 'Beautifulsoup4', 'Pandas'],
    type: 'scraping',
    githubUrl: 'https://github.com/robsonraphael/scraping-job'
  },
]