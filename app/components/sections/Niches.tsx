export default function Niches() {
  const niches = [
    '⚖️ Escritórios de Advocacia',
    '🦷 Clínicas Odontológicas',
    '🏥 Clínicas Médicas e de Estética',
    '🏢 Empresas e Negócios Locais',
  ]

  return (
    <section id="nichos" className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Nichos que atendo</h2>
          <p className="body-text text-lg max-w-3xl mx-auto">
            Adapto cada solução à realidade do seu segmento. Se o seu negócio precisa de tecnologia, posso ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((niche) => (
            <div key={niche} className="panel-card p-6 text-center text-lg text-[var(--text-primary)] font-medium">
              {niche}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
