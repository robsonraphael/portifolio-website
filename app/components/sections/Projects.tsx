'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/app/components/ui/ProjectCard'

type ProjectType = 'todos' | 'web' | 'bots' | 'scraping'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('todos')

  const filteredProjects = projects.filter(project => 
    activeFilter === 'todos' || project.type === activeFilter
  )

  const filterButtons = [
    { key: 'todos' as ProjectType, label: 'Todos', count: projects.length },
    { key: 'web' as ProjectType, label: 'Web', count: projects.filter(p => p.type === 'web').length },
    { key: 'bots' as ProjectType, label: 'Bots', count: projects.filter(p => p.type === 'bots').length },
    { key: 'scraping' as ProjectType, label: 'Scraping', count: projects.filter(p => p.type === 'scraping').length },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projetos <span className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent'>Recentes</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus <span className='bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent font-semibold'>trabalhos</span> <span className='bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent font-semibold'>mais recentes</span> destacando minha experiência como desenvolvedor.
          </p>
          
          {/* Filtros Refinados */}
          <div className='flex flex-wrap justify-center items-center gap-3 mt-12'>
            {filterButtons.map((filter) => (
              <button 
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`
                  relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                  border-2 min-w-[100px] group overflow-hidden backdrop-blur-sm
                  ${activeFilter === filter.key 
                    ? 'bg-white text-gray-900 border-white shadow-lg shadow-white/20' 
                    : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white hover:bg-gray-800/30'
                  }
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {filter.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.key ? 'bg-gray-900/20 text-gray-700' : 'bg-white/10 text-gray-400'
                  }`}>
                    {filter.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contador Sutil */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gray-900 rounded-full text-gray-400 text-sm border border-gray-800">
            {activeFilter === 'todos' ? 'Todos os projetos' : `Filtro: ${activeFilter}`} 
            <span className="ml-2 bg-gray-800 px-2 py-1 rounded-full">{filteredProjects.length}</span>
          </span>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Mensagem Sem Projetos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-400 mb-2">Nenhum projeto encontrado</p>
              <p className="text-gray-500">Tente outro filtro ou category</p>
            </div>
          </div>
        )}

        {/* Chamada para Ação Sutil */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interessado em ver mais detalhes ou colaborar?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 bg-white text-gray-900 hover:bg-gray-100 rounded-lg group font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Vamos conversar
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}