export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-bg-overlay border-t border-border-default py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between items-center">
<<<<<<< Updated upstream
          <div className="text-gray-400 mb-4">
            © {currentYear} Raphael. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6 font-light text-sm">
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Habilidades
=======
          <div className="text-text-muted mb-4 text-center">© {currentYear} Robson Raphael | Tecnologia Jurídica — Todos os direitos reservados.</div>

          <div className="flex space-x-6 font-light text-sm">
            <a href="#services" className="text-text-muted hover:text-text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-text-muted hover:text-text-primary transition-colors">
              Sobre
>>>>>>> Stashed changes
            </a>
            <a href="#contact" className="text-text-muted hover:text-text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}