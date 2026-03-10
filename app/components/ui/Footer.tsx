export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between items-center">
          <div className="text-gray-400 mb-4 text-center">© {currentYear} Robson Raphael | Tecnologia Jurídica — Todos os direitos reservados.</div>

          <div className="flex space-x-6 font-light text-sm">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
