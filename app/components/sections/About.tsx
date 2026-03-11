import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-bg-overlay">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image src="/images/prof.jpeg" alt="Robson Raphael" width={220} height={220} className="rounded-2xl border border-border-default" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-display text-text-primary mb-6">Desenvolvedor especializado em tecnologia para advocacia</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Sou Robson Raphael, desenvolvedor com foco exclusivo em soluções tecnológicas para escritórios de advocacia.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">Fundador da IntelliJus, plataforma de automação jurídica em desenvolvimento.</p>
            <p className="text-text-secondary leading-relaxed">
              Ajudo advogados a modernizar seus escritórios sem precisar entender de tecnologia — cuido de tudo, desde o desenvolvimento até a
              entrega funcionando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
