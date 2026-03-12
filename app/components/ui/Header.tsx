'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navigation = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

    // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Se o clique foi fora do menu e fora do botão
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Adicionar listener apenas quando o menu estiver aberto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className='absolute'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-300 p-0.5'>
              <div className='w-full h-full rounded-full bg-gray-900 flex items-center justify-center'>
                <Image
                  className='w-6 h-6 sm:w-8 sm:h-8 rounded-full'
                  src={'/images/prof.png'}
                  width={200}
                  height={200}
                  alt='profile'
                />
              </div>
            </div>
          </div>

          <a href="#" className='mx-12 text-left'>
            <div className="text-2xl font-bold text-white">
              Raphael
            </div>
            <div className="text-xs font-light text-gray-400">
              Desenvolvedor
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Versão SVG */}
          <button
            ref={buttonRef}
            className="md:hidden text-gray-400 hover:text-white transition-colors relative w-6 h-6"
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden mt-4 space-y-4 pb-4 animate-fade-in-up"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-400 hover:text-white transition-colors py-2 border-b border-gray-800 last:border-b-0 font-medium hover:translate-x-2 hover:scale-105 duration-300"
                onClick={handleMenuLinkClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}