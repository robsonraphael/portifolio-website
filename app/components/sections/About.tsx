import Image from 'next/image'

export default function About() {
  const highlights = [
    { icon: '🚀', label: 'Projetos entregues', value: '+15' },
    { icon: '⚙️', label: 'Fundador da IntelliJus', value: 'SaaS próprio em operação' },
    { icon: '📍', label: 'Recife', value: 'Atendo todo o Brasil' },
  ]

  return (
    <section id="about" className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image src="/images/prof.jpeg" alt="Robson Raphael" width={250} height={250} className="rounded-xl border-transparent" />
          </div>
          <div className="md:col-span-2">
            <h2 className="section-title mb-6">Quem está por trás da tecnologia</h2>
            <p className="body-text mb-4">
              Sou Robson Raphael, desenvolvedor e empreendedor de tecnologia em Recife. Tenho experiência em desenvolvimento web, automação e
              sistemas personalizados, atuando com foco em negócios que querem crescer usando tecnologia de verdade — não apenas uma presença digital básica.
            </p>
            <p className="body-text mb-4">
              Fundei a IntelliJus, plataforma SaaS de monitoramento jurídico para escritórios de advocacia, e trabalho em paralelo ajudando clínicas,
              escritórios e empresas a automatizarem processos, conquistarem clientes online e modernizarem sua operação.
            </p>
            <p className="body-text">
              Não terceirizo. Cuido pessoalmente de cada projeto, do desenvolvimento à entrega, com comunicação direta e suporte real.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="panel-card p-6">
              <p className="text-2xl mb-3">{highlight.icon}</p>
              <p className="text-[var(--text-primary)] font-semibold mb-2">{highlight.label}</p>
              <p className="body-text">{highlight.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
