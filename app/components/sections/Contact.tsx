'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar envio do formulário
    console.log('Formulário enviado:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Vamos trabalhar juntos</h2>
            <p className="text-xl text-gray-300">
              Tem um projeto em mente? Vamos conversar! Estou sempre aberto a novas oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contato</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 block mb-1">E-mail</span>
                  <a href="mailto:robsonraphael123@outlook.com" className="text-white hover:text-gray-300 transition-colors">
                    robsonraphael123@outlook.com
                  </a>
                </div>
                
                <div>
                  <span className="text-gray-400 block mb-1">GitHub</span>
                  <a href="https://github.com/robsonraphael" className="text-white hover:text-gray-300 transition-colors">
                    @robsonraphael
                  </a>
                </div>
                
                <div>
                  <span className="text-gray-400 block mb-1">Discord</span>
                  <a href="https://discord.com/users/ra6hael." className="text-white hover:text-gray-300 transition-colors">
                    ra6hael.
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Assunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Qual é o tópico?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-full"
              >
                Enviar mensagem
              </button>

              <p className="text-gray-400 text-sm text-center">
                ✓ Geralmente respondo em 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}