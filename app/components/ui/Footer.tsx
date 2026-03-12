export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-overlay)] border-t border-[var(--border-default)] py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between items-center">
          <div className="text-[var(--text-muted)] mb-4 text-center">© {currentYear} Robson Raphael | Tecnologia Jurídica — Todos os direitos reservados.</div>

          <div className="flex space-x-6 font-light text-sm">
            <a href="#services" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
