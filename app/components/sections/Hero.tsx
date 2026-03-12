import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://wa.me/?text=Olá%2C%20Robson!%20Quero%20modernizar%20meu%20escritório%20de%20advocacia.'

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
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary px-8 py-4 inline-block text-sm">
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
