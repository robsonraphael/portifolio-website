import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5581993873682&text=Olá%20Robson%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20você%20oferece%20para%20escritórios%20de%20advocacia.'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-overlay)] via-[var(--bg-base)] to-[var(--bg-surface)] relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <h1 className="display-title text-4xl md:text-6xl mb-6 leading-tight">
          Tecnologia que trabalha enquanto você advoga.
        </h1>

        <p className="text-lg md:text-2xl body-text mb-8 max-w-4xl mx-auto">
          Desenvolvo sites profissionais, automação de WhatsApp e sistemas de gestão exclusivamente para escritórios de advocacia. Sem complicação,
          sem precisar entender de tecnologia.
        </p>

        <div className="space-x-4 space-y-4">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whats px-8 py-4 inline-block text-sm">
            Quero modernizar meu escritório
          </a>

          <a href="#services" className="btn-secondary px-8 py-4 font-semibold inline-block">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
