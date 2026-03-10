import FloatingParticles from '@/app/components/animations/FloatingParticles'

const whatsappUrl =
  'https://wa.me/?text=Olá%2C%20Robson!%20Quero%20modernizar%20meu%20escritório%20de%20advocacia.'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Tecnologia que trabalha enquanto você advoga.
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Desenvolvo sites profissionais, automação de WhatsApp e sistemas de gestão exclusivamente para escritórios de advocacia. Sem complicação,
          sem precisar entender de tecnologia.
        </p>

        <div className="space-x-4 space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 inline-block"
          >
            Quero modernizar meu escritório
          </a>

          <a
            href="#services"
            className="border-2 border-gray-600 text-gray-300 hover:border-[#C8A83C] hover:text-[#C8A83C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}
