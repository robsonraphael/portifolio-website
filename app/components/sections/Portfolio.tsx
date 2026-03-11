export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-bg-base">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display text-text-primary text-center mb-12">Portfólio</h2>

        <div className="card card-featured">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-2xl font-semibold text-text-primary">IntelliJus — Automação de Processos Jurídicos</h3>
            <span className="badge badge-gold whitespace-nowrap">Em desenvolvimento</span>
          </div>
          <p className="text-text-secondary mb-6">
            Plataforma de tecnologia desenvolvida exclusivamente para escritórios de advocacia, com automação de processos, gestão de documentos e
            integração de ferramentas jurídicas.
          </p>
          <button disabled className="btn-secondary opacity-50 cursor-not-allowed">
            Em breve
          </button>
        </div>
      </div>
    </section>
  )
}
