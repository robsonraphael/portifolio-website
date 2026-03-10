export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Portfólio</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-2xl font-semibold text-white">IntelliJus — Automação de Processos Jurídicos</h3>
            <span className="text-xs bg-[#C8A83C]/20 text-[#C8A83C] px-3 py-1 rounded-full whitespace-nowrap">Em desenvolvimento</span>
          </div>
          <p className="text-gray-300 mb-6">
            Plataforma de tecnologia desenvolvida exclusivamente para escritórios de advocacia, com automação de processos, gestão de documentos e
            integração de ferramentas jurídicas.
          </p>
          <button disabled className="px-5 py-3 rounded-lg bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700">
            Em breve
          </button>
        </div>
      </div>
    </section>
  )
}
