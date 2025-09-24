export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between items-center">
          <div className="text-gray-400 mb-4">
            © {currentYear} Raphael. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6 font-light text-sm">
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Habilidades
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