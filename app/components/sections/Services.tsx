export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Site Profissional para Advogados',
      description:
        'Site moderno, rápido e otimizado para captar clientes. Com formulário de contato, área de atuação e integração com WhatsApp.',
      badge: 'Mais solicitado',
    },
    {
      icon: '💬',
      title: 'Automação de Atendimento no WhatsApp',
      description: 'Bot jurídico que responde clientes 24 horas, faz triagem automática de casos, agenda consultas e envia lembretes.',
    },
    {
      icon: '⚙️',
      title: 'Automação de Documentos Jurídicos',
      description:
        'Geração automática de contratos, petições e documentos a partir de templates. Elimina trabalho manual repetitivo.',
    },
    {
      icon: '📋',
      title: 'Sistema de Gestão para Escritórios',
      description: 'Organização de processos, acompanhamento de prazos e integração entre as ferramentas do seu escritório.',
    },
  ]

  return (
    <section id="services" className="py-20 section-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">O que eu desenvolvo para escritórios de advocacia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="panel-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{service.icon}</span>
                {service.badge && <span className="brand-badge">{service.badge}</span>}
              </div>
              <h3 className="text-xl text-[var(--text-primary)] font-semibold mb-3">{service.title}</h3>
              <p className="body-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
