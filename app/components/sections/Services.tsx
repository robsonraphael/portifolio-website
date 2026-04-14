export default function Services() {
  const businessServices = [
    {
      icon: '🌐',
      title: 'Site Profissional',
      description:
        'Site moderno, rápido e otimizado para captar clientes. Com formulário de contato, apresentação de serviços e integração com WhatsApp.',
      badge: 'Mais solicitado',
    },
    {
      icon: '💬',
      title: 'Automação de Atendimento no WhatsApp',
      description: 'Atendimento automatizado que responde clientes 24h, faz triagem, agenda consultas e envia lembretes para qualquer negócio.',
    },
    {
      icon: '🎯',
      title: 'Captação de Leads Qualificados',
      description:
        'Estratégias e estruturas para atrair contatos realmente interessados no seu serviço, com foco em aumentar conversas e oportunidades reais de venda.',
    },
    {
      icon: '📲',
      title: 'Automação de Prospecção X1 no WhatsApp',
      description: 'Fluxos personalizados para iniciar, nutrir e acompanhar contatos no WhatsApp com mensagens direcionadas e follow-up automático.',
    },
  ]

  const intelliJus = {
    icon: '⚖️',
    title: 'IntelliJus',
    description:
      'Plataforma SaaS de monitoramento de processos judiciais, gestão de movimentações e alertas automáticos para escritórios de advocacia.',
    href: 'https://landing-page-intellijus.vercel.app/',
  }

  return (
    <section id="services" className="py-20 section-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">O que eu desenvolvo</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl text-[var(--text-primary)] font-semibold mb-6">Para qualquer negócio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessServices.map((service) => (
                <div key={service.title} className="panel-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && <span className="brand-badge">{service.badge}</span>}
                  </div>
                  <h4 className="text-xl text-[var(--text-primary)] font-semibold mb-3">{service.title}</h4>
                  <p className="body-text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-[var(--text-primary)] font-semibold mb-6">Produto exclusivo para advocacia</h3>
            <div className="panel-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{intelliJus.icon}</span>
                <span className="brand-badge">SaaS próprio</span>
              </div>
              <h4 className="text-xl text-[var(--text-primary)] font-semibold mb-3">{intelliJus.title}</h4>
              <p className="body-text mb-4">{intelliJus.description}</p>
              <a href={intelliJus.href} target="_blank" rel="noreferrer" className="text-[var(--gold)] hover:opacity-80 transition-opacity font-medium">
                Ver mais →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
