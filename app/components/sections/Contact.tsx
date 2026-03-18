'use client'

import { useState } from 'react'
import { Mail, Linkedin } from 'lucide-react'
import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5581981717072&text=Olá%20Robson%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20tecnologia%20para%20escritórios.'

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
    <section id="contact" className="relative py-20 section-surface">
      <FloatingParticles />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Pronto para modernizar seu escritório?</h2>
            <p className="text-xl body-text max-w-3xl mx-auto">
              Me conta o que você precisa e te mostro como a tecnologia pode resolver. Respondo em até 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whats font-semibold p-4 block text-center text-sm">
                Falar no WhatsApp
              </a>

              <a href="mailto:robsonraphael123@outlook.com" className="panel-card flex gap-4 p-4 text-[var(--text-secondary)]">
                <Mail className="text-[var(--gold)]" />
                <span>robsonraphael123@outlook.com</span>
              </a>

              <a href="https://linkedin.com/in/robsonraphael" target="_blank" rel="noreferrer" className="panel-card flex gap-4 p-4 text-[var(--text-secondary)]">
                <Linkedin className="text-[var(--gold)]" />
                <span>linkedin.com/in/robsonraphael</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 panel-card p-6">
              <input name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nome" className="input-field" disabled={isSubmitting} />
              <input name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail" className="input-field" disabled={isSubmitting} />
              <input name="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Assunto" className="input-field" disabled={isSubmitting} />
              <textarea name="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Mensagem" className="input-field resize-none" disabled={isSubmitting} />

              {submitStatus === 'success' && <p className="text-emerald-400">✅ Mensagem enviada com sucesso!</p>}
              {submitStatus === 'error' && <p className="text-red-400">❌ Erro ao enviar. Tente novamente.</p>}

              <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 disabled:opacity-60">
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              <p className="text-[var(--text-muted)] text-sm">Geralmente respondo em até 24 horas.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
