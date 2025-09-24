import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ferramentas e Tecnologias</h2>
          <p className="text-xl text-gray-300">
            As tecnologias e frameworks que utilizo para criar experiências <strong>excepcionais</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center group">
              <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 group-hover:bg-gray-700 group-hover:transform group-hover:scale-105">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-300">
            <button className='mb-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-block'><strong>E muito mais...</strong></button>
            <br />
            Sempre aprendendo novas tecnologias para permanecer na vanguarda da inovação
          </p>
        </div>
      </div>
    </section>
  )
}