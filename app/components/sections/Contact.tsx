'use client'

import { useState } from 'react'
<<<<<<< Updated upstream
import { Github, Mail, Linkedin } from 'lucide-react'
import FloatingParticles from "@/app/components/animations/FloatingParticles"
=======
import { Mail, Linkedin } from 'lucide-react'
import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://wa.me/5581981717072?text=Olá%2C%20Robson!%20Quero%20modernizar%20meu%20escritório%20de%20advocacia.'
>>>>>>> Stashed changes

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Mostra o erro específico da API
        throw new Error(data.error || 'Falha no envio')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Erro detalhado:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative py-20 bg-bg-overlay">
      <FloatingParticles />
      <div className="container mx-auto px-6">
<<<<<<< Updated upstream
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">Vamos Trabalhar Juntos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar! Estou sempre aberto a novas oportunidades e desafios.
=======
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-display text-text-primary mb-4">Pronto para modernizar seu escritório?</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Me conta o que você precisa e te mostro como a tecnologia pode resolver. Respondo em até 24 horas.
>>>>>>> Stashed changes
            </p>
            <div className="w-40 h-1 bg-gray-800 mx-auto mt-6 rounded-md"></div>
          </div>

<<<<<<< Updated upstream
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                  Contato
                </h3>

                <div className="space-y-10">
                  <a
                    className="bg-gray-800 border-1 border-solid border-gray-700 flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900 transition-colors transform-all hover:scale-95 hover:duration-500 hover:ease-in-out"
                    href="mailto:robsonraphael123@outlook.com">
                    <div className="w-15 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 border-transparent">
                      <Mail className='text-white' />
                    </div>
                    <div>
                      <span className="text-gray-50 block mb-1">E-mail</span>
                      <span
                        className="text-gray-200 hover:text-gray-400 transition-colors font-light text-sm"
                      >
                        robsonraphael123@outlook.com
                      </span>
                    </div>
                  </a>

                  <a
                    className="bg-gray-800 border-1 border-solid border-gray-700 flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900 transition-colors transform-all hover:scale-95 hover:duration-500 hover:ease-in-out"
                    href="https://github.com/robsonraphael">
                    <div className="w-15 h-12 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 border-transparent">
                      <Github className='text-white' />
                    </div>
                    <div>
                      <span className="text-gray-50 block mb-1">Github</span>
                      <span
                        className="text-gray-200 hover:text-gray-400 transition-colors font-light text-sm"
                      >
                        @robsonraphael
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://discord.com/users/ra6hael."
                    target="_blank"
                    className="bg-gray-800 border-1 border-solid border-gray-700 flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900 transition-colors transform-all hover:scale-95 hover:duration-500 hover:ease-in-out"
                  >
                    <div className="w-15 h-12 bg-linear-90 from-[#5865F2] to-[#4955da] rounded-xl flex items-center justify-center flex-shrink-0 border-transparent">
                      <svg
                        className='text-white'
                        width={30}
                        hanging={30}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.1 10.1 0 0 1-1.71.83 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-50 block mb-1">Discord</span>
                      <span
                        className="text-gray-200 hover:text-gray-400 transition-colors font-light text-sm"
                      >
                        ra6hael.
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário - Design Aprimorado */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm font-medium">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm font-medium">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                  placeholder="Ex: Desenvolvimento de Site, Consultoria, etc."
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto, ideia ou como posso ajudá-lo..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-center">
                    ✅ Mensagem enviada com sucesso! Retornarei em breve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-center">
                    ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente por email.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Geralmente respondo em até 24 horas
                </p>
              </div>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                Falar no WhatsApp
              </a>

              <a href="mailto:rerautomacoes@gmail.com" className="card flex gap-4 items-center text-text-primary">
                <Mail className="text-gold" />
                <span>rerautomacoes@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/robsonraphael"
                target="_blank"
                rel="noreferrer"
                className="card flex gap-4 items-center text-text-primary"
              >
                <Linkedin className="text-gold" />
                <span>linkedin.com/in/robsonraphael</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nome" className="input-field" disabled={isSubmitting} />
              <input name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail" className="input-field" disabled={isSubmitting} />
              <input name="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Assunto" className="input-field" disabled={isSubmitting} />
              <textarea name="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Mensagem" className="input-field resize-none" disabled={isSubmitting} />

              {submitStatus === 'success' && <p className="text-status-success">Mensagem enviada com sucesso.</p>}
              {submitStatus === 'error' && <p className="text-status-error">Erro ao enviar. Tente novamente.</p>}

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              <p className="text-text-muted text-sm">Geralmente respondo em até 24 horas.</p>
>>>>>>> Stashed changes
            </form>
          </div>

          {/* Footer da Seção */}
          <div className="text-center mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              Prefere conversar por outro canal? Sinta-se à vontade para me contactar por qualquer uma das plataformas acima!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}