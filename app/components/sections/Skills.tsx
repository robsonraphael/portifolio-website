const steps = [
  'Conversamos sobre seu escritório',
  'Desenvolvo a solução',
  'Entrego funcionando com suporte',
]

export default function Skills() {
  return (
    <section id="como-funciona" className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="section-title">Como funciona</h2>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={step} className="panel-card p-6 text-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] font-bold mb-3">
                {index + 1}
              </span>
              <p className="text-[var(--text-primary)] font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
