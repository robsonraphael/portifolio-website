import FloatingParticles from "@/app/components/animations/FloatingParticles"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <FloatingParticles/>

      {/* Gradiente profundidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent mb-6 leading-tight">
          RaphaDEV
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Como um desenvolvedor full stack apaixonado, crio aplicações web modernas, 
          robustas e escaláveis, do backend à interface. Especialista em automações, 
          raspagem de dados e criação de bots para Telegram e Discord.
        </p>
        
        <div className="space-x-4 space-y-5">
          <a
            href="#projects"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block border-2 border-transparent hover:border-white/20 shadow-2xl"
          >
            Veja meus projetos →
          </a>

          <a
            href="#contact"
            className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block backdrop-blur-sm"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator refinado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-white transition-colors">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 hover:bg-white transition-colors"></div>
        </div>
      </div>
    </section>
  )
}