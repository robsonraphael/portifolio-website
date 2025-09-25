interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  type: 'web' | 'bots' | 'scraping'
  image?: string
  liveUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="p-8">
        {/* Cabeçalho com número e tipo */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-2xl font-bold text-white mb-2 block">{project.title}</span>
            <span className="inline-block px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
              {project.type}
            </span>
          </div>
          <span className="text-gray-600 text-sm font-mono">0{index + 1}</span>
        </div>
        
        {/* Descrição */}
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors group/link"
            >
              Ver projeto 
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}