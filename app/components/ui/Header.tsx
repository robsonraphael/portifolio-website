'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const whatsappUrl =
  'https://wa.me/5581993873682?text=Olá%2C%20Robson!%20Quero%20saber%20mais%20sobre%20seus%20serviços.'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navigation = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 w-full bg-[var(--bg-overlay)]/90 backdrop-blur-lg z-50 border-b border-[var(--border-default)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--gold-dim)] to-[var(--gold)] p-0.5">
              <div className="w-full h-full rounded-full bg-[var(--bg-surface)] flex items-center justify-center">
                <Image className="w-8 h-7 rounded-full" src="/images/logo.png" width={300} height={300} alt="profile" />
              </div>
            </div>
            <a href="#home" className="text-left">
              <div className="text-xl sm:text-2xl display-title">Robson Raphael</div>
              <div className="text-xs font-light text-[var(--text-muted)]">Desenvolvimento e Automação para Negócios</div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 font-medium">
                {item.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whats-header px-4 py-2 text-xs">
              Falar no WhatsApp
            </a>
          </div>

          <button
            ref={buttonRef}
            className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors relative w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden mt-4 space-y-4 pb-4 animate-fade-in-up">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-2 border-b border-[var(--border-subtle)] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block btn-whats-header px-4 py-3 text-center text-xs">
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
