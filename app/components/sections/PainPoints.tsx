export default function PainPoints() {
  const pains = [
    'Triagem manual de clientes no WhatsApp',
    'Geração manual de contratos e petições',
    'Clientes sem resposta fora do horário comercial',
    'Site desatualizado que não gera contatos',
    'Processos organizados em planilhas e pastas',
    'Monitoramento de processos e prazos manual',
  ]

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="section-title text-center mb-10">Seu escritório ainda perde tempo com isso?</h2>

        <ul className="space-y-4 mb-8">
          {pains.map((pain) => (
            <li key={pain} className="text-lg body-text flex items-start gap-3">
              <span className="text-[var(--gold)] font-bold">✗</span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>

        <p className="body-text text-lg">
          Cada um desses pontos representa horas da sua semana que poderiam estar em atendimento, audiência ou com a sua família.
        </p>
      </div>
    </section>
  )
}
