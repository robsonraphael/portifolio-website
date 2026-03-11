export default function PainPoints() {
  const pains = [
    'Triagem manual de clientes no WhatsApp',
    'Geração manual de contratos e petições',
    'Clientes sem resposta fora do horário comercial',
    'Site desatualizado que não gera contatos',
    'Processos organizados em planilhas e pastas',
  ]

  return (
    <section className="py-20 bg-bg-overlay">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display text-text-primary text-center mb-10">Seu escritório ainda perde tempo com isso?</h2>

        <ul className="space-y-4 mb-8">
          {pains.map((pain) => (
            <li key={pain} className="text-lg text-text-secondary flex items-start gap-3">
              <span className="text-status-error font-bold">✗</span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>

        <p className="text-text-secondary text-lg">
          Cada um desses pontos representa horas da sua semana que poderiam estar em atendimento, audiência ou com a sua família.
        </p>
      </div>
    </section>
  )
}
