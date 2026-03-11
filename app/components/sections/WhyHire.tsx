export default function WhyHire() {
  const items = [
    {
      icon: '⚖️',
      title: 'Foco exclusivo em advocacia',
      text: 'Não desenvolvo para qualquer segmento. Cada solução é pensada para a realidade do escritório de advocacia.',
    },
    {
      icon: '🚀',
      title: 'Entrega rápida e sem burocracia',
      text: 'Você não precisa entender de tecnologia. Cuido de tudo, do desenvolvimento à entrega, com comunicação simples e direta.',
    },
    {
      icon: '🔧',
      title: 'Suporte após a entrega',
      text: 'Não sumo depois de entregar. Ofereço suporte para garantir que tudo funcione no seu escritório.',
    },
  ]

  return (
    <section className="py-20 bg-bg-overlay">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-text-primary text-center mb-12">
          Por que escolher quem é especialista em tecnologia jurídica?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="card">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl text-text-primary font-semibold mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
