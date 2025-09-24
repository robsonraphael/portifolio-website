interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
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
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 group">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className="text-gray-400 text-sm">0{index + 1}</span>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-white hover:text-gray-300 transition-colors flex items-center"
            >
              Ver projeto <span className="ml-1">→</span>
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}