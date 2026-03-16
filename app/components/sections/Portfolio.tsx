const portfolioProjects = [
  {
    title: 'Moreira & Associados',
    description: 'Site institucional moderno para escritório de advocacia, com apresentação de serviços e canais de contato.',
    href: 'https://moreira-associados.vercel.app/',
  },
  {
    title: 'Leadryx',
    description: 'Landing page focada em conversão, com estrutura estratégica para captar leads e apresentar soluções de forma objetiva.',
    href: 'https://leadryx-azure.vercel.app/',
  },
  {
    title: 'Landing Page IntelliJus',
    description: 'Página de apresentação da IntelliJus, destacando benefícios da automação jurídica e chamada para ação.',
    href: 'https://landing-page-intellijus.vercel.app/',
  },
  {
    title: 'IntelliJus — Automação de Processos Jurídicos',
    description:
      'Plataforma desenvolvida exclusivamente para escritórios de advocacia, com monitoramento de movimentações de processos diário, gestão de documentos e lembretes via whatsapp ou email, além de uma futura integração de ferramentas jurídicas.',
    status: 'Em desenvolvimento',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 section-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="section-title text-center mb-12">Portfólio</h2>

        <div className="space-y-6">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="panel-card p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                {project.status && <span className="brand-badge whitespace-nowrap">{project.status}</span>}
              </div>
              <p className="body-text mb-6">{project.description}</p>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-5 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
                >
                  Ver site
                </a>
              ) : (
                <button disabled className="px-5 py-3 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--border-subtle)]">
                  Em breve
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
