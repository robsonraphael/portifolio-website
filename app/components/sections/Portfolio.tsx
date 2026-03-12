export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 section-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="section-title text-center mb-12">Portfólio</h2>

        <div className="panel-card p-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">IntelliJus — Automação de Processos Jurídicos</h3>
            <span className="brand-badge whitespace-nowrap">Em desenvolvimento</span>
          </div>
          <p className="body-text mb-6">
            Plataforma de tecnologia desenvolvida exclusivamente para escritórios de advocacia, com automação de processos, gestão de documentos e
            integração de ferramentas jurídicas.
          </p>
          <button disabled className="px-5 py-3 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--border-subtle)]">
            Em breve
          </button>
        </div>
      </div>
    </section>
  )
}
