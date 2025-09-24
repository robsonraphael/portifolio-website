import { projects } from '@/data/projects'
import ProjectCard from '@/app/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projetos recentes</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes destacando minha experiência.
          </p>
          <div className='flex justify-center items-center space-x-7 md:space-x-9 mt-9 text-md md:text-xl'>
            <button className='bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-block'> Web </button>
            <button className='bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-block'> Bots </button>
            <button className='bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-block'> Scraping </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}