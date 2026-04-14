export default function PainPoints() {
  const pains = [
    'Atendimento manual no WhatsApp sem automação',
    'Site desatualizado que não gera contatos',
    'Documentos e contratos feitos um a um',
    'Clientes sem resposta fora do horário comercial',
    'Processos organizados em planilhas',
    'Sem sistema para acompanhar clientes e leads',
  ]

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="section-title text-center mb-10">Seu negócio ainda perde tempo com isso?</h2>

        <ul className="space-y-4 mb-8">
          {pains.map((pain) => (
            <li key={pain} className="text-lg body-text flex items-start gap-3">
              <span className="text-[var(--gold)] font-bold">✗</span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>

        <p className="body-text text-lg">
          Cada um desses pontos representa horas da sua semana que poderiam estar no que realmente importa.
        </p>
      </div>
    </section>
  )
}
