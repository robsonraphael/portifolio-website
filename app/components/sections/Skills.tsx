import Image from 'next/image'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 section-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="section-title">Tecnologias utilizadas</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="panel-card p-5 flex items-center gap-3">
              {skill.iconType === 'svg' ? (
                <Image src={skill.icon} alt={skill.name} width={24} height={24} className="object-contain" />
              ) : (
                <span className="text-2xl">{skill.icon}</span>
              )}
              <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
