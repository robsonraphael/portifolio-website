import { ArrowRight } from 'lucide-react';

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
            <div key={index} className="flex items-center w-full">
              {/* O Card */}
              <div className="panel-card p-8 text-center w-full min-h-[120px] flex items-center justify-center border border-white/5 bg-[#1a263d]/30 rounded-xl">
                <p className="text-[var(--text-primary)] font-medium">{step}</p>
              </div>

              {/* A Seta (Aparece apenas entre os cards e em telas MD+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mx-2 text-[var(--gold)]">
                  <ArrowRight className="w-6 h-6 animate-pulse-horizontal" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
