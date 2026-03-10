'use client'

import { useState } from 'react'
import { Mail, Linkedin } from 'lucide-react'
import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://wa.me/?text=Olá%2C%20Robson!%20Quero%20modernizar%20meu%20escritório%20de%20advocacia.'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Falha no envio')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-[#0f172a]">
      <FloatingParticles />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Pronto para modernizar seu escritório?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Me conta o que você precisa e te mostro como a tecnologia pode resolver. Respondo em até 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl p-4 block text-center"
              >
                Falar no WhatsApp
              </a>

              <a href="mailto:robsonraphael123@outlook.com" className="bg-gray-800 border border-gray-700 flex gap-4 p-4 rounded-xl text-gray-100">
                <Mail className="text-[#C8A83C]" />
                <span>robsonraphael123@outlook.com</span>
              </a>

              <a
                href="https://linkedin.com/in/robsonraphael"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 border border-gray-700 flex gap-4 p-4 rounded-xl text-gray-100"
              >
                <Linkedin className="text-[#C8A83C]" />
                <span>linkedin.com/in/robsonraphael</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nome" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white" disabled={isSubmitting} />
              <input name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white" disabled={isSubmitting} />
              <input name="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Assunto" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white" disabled={isSubmitting} />
              <textarea name="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Mensagem" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white resize-none" disabled={isSubmitting} />

              {submitStatus === 'success' && <p className="text-green-400">✅ Mensagem enviada com sucesso!</p>}
              {submitStatus === 'error' && <p className="text-red-400">❌ Erro ao enviar. Tente novamente.</p>}

              <button type="submit" disabled={isSubmitting} className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-gray-200 disabled:bg-gray-400">
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              <p className="text-gray-400 text-sm">Geralmente respondo em até 24 horas.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
