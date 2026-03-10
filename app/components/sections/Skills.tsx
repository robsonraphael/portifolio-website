import Image from 'next/image'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tecnologias utilizadas</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-3">
              {skill.iconType === 'svg' ? (
                <Image src={skill.icon} alt={skill.name} width={24} height={24} className="object-contain" />
              ) : (
                <span className="text-2xl">{skill.icon}</span>
              )}
              <span className="text-gray-100 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
