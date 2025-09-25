'use client'

import { useState, useEffect, useRef } from 'react'
import { skills } from '@/data/skills'
import Image from 'next/image'

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false)
  const carousel1Ref = useRef<HTMLDivElement>(null)
  const carousel2Ref = useRef<HTMLDivElement>(null)
  const carousel3Ref = useRef<HTMLDivElement>(null)

  // Dividir skills em 3 grupos iguais
  const skillsPerGroup = Math.ceil(skills.length / 3)
  const group1 = skills.slice(0, skillsPerGroup)
  const group2 = skills.slice(skillsPerGroup, skillsPerGroup * 2)
  const group3 = skills.slice(skillsPerGroup * 2)

  // Duplicar cada grupo para efeito infinito
  const duplicatedGroup1 = [...group1, ...group1, ...group1]
  const duplicatedGroup2 = [...group2, ...group2, ...group2]
  const duplicatedGroup3 = [...group3, ...group3, ...group3]

  // Efeito de scroll automático CORRIGIDO
  useEffect(() => {
    if (isPaused) return

    let animationFrameId: number
    const carousels = [carousel1Ref.current, carousel2Ref.current, carousel3Ref.current]
    const scrollPositions = [0, 0, 0]

    // Configurações CORRETAS para cada carrossel
    const configs = [
      { speed: 0.5, direction: 'right' },  // → Direita
      { speed: 0.7, direction: 'left' },   // ← Esquerda  
      { speed: 0.4, direction: 'right' }   // → Direita
    ]

    const animateScroll = () => {
      carousels.forEach((carousel, index) => {
        if (!carousel) return
        
        const config = configs[index]
        const segmentWidth = carousel.scrollWidth / 3
        
        if (config.direction === 'right') {
          // Movimento para DIREITA
          scrollPositions[index] += config.speed
          if (scrollPositions[index] >= segmentWidth) {
            scrollPositions[index] = 0
          }
          carousel.scrollLeft = scrollPositions[index]
        } else {
          // Movimento para ESQUERDA - LÓGICA CORRIGIDA
          scrollPositions[index] -= config.speed
          if (scrollPositions[index] <= -segmentWidth) {
            scrollPositions[index] = 0
          }
          // Para movimento esquerda, usar cálculo diferente
          carousel.scrollLeft = segmentWidth + scrollPositions[index]
        }
      })
      
      animationFrameId = requestAnimationFrame(animateScroll)
    }

    animationFrameId = requestAnimationFrame(animateScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ferramentas e <span className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent'>Tecnologias</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Domínio completo em diversas tecnologias para entregar <strong className='bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent'>soluções</strong> <strong className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent">excepcionais</strong>
          </p>
        </div>

        {/* Container dos Carrosseis */}
        <div 
          className="space-y-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carrossel 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div 
              ref={carousel1Ref}
              className="flex overflow-x-hidden py-4 scrollbar-hide"
            >
              <div className="flex space-x-6">
                {duplicatedGroup1.map((skill, index) => (
                  <SkillCard key={`carousel1-${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Carrossel 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div 
              ref={carousel2Ref}
              className="flex overflow-x-hidden py-4 scrollbar-hide"
            >
              <div className="flex space-x-6">
                {duplicatedGroup2.map((skill, index) => (
                  <SkillCard key={`carousel2-${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Carrossel 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div 
              ref={carousel3Ref}
              className="flex overflow-x-hidden py-4 scrollbar-hide"
            >
              <div className="flex space-x-6">
                {duplicatedGroup3.map((skill, index) => (
                  <SkillCard key={`carousel3-${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Indicador */}
        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-2">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isPaused ? 'bg-gray-600' : 'bg-white animate-pulse'}`}></div>
            <span className="text-gray-400 text-sm">
              {isPaused ? 'Pausado' : 'Automático'}
            </span>
          </div>
        </div>

        {/* Texto Final */}
        <div className="text-center mt-16">
          <button 
            className='mb-4 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-block border-2 border-transparent hover:border-gray-300'
          >
            <strong>E muito mais...</strong>
          </button>
          <p className="text-lg mt-2 text-gray-300 max-w-3xl mx-auto">
            Aprendizado tecnológico em constante evolução para acompanhar as últimas <strong className='bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent'>tendências do mercado</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

// Componente SkillCard
function SkillCard({ skill }: { skill: { name: string; icon: string; iconType: string } }) {
  return (
    <div className="flex-shrink-0 w-36 group cursor-pointer">
      <div className="bg-gray-900 rounded-xl p-5 transition-all duration-300 group-hover:bg-gray-800 group-hover:transform group-hover:scale-105 border-2 border-gray-800 group-hover:border-gray-600">
        <div className="text-3xl mb-3 text-center h-12 flex items-center justify-center">
          {skill.iconType === 'svg' ? (
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain"
            />
          ) : (
            <span>{skill.icon}</span>
          )}
        </div>
        <span className="text-white font-medium text-sm text-center block leading-tight">
          {skill.name}
        </span>
      </div>
    </div>
  )
}