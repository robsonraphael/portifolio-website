import Hero from '@/app/components/sections/Hero'
import PainPoints from '@/app/components/sections/PainPoints'
import Services from '@/app/components/sections/Services'
import WhyHire from '@/app/components/sections/WhyHire'
import Portfolio from '@/app/components/sections/Portfolio'
import About from '@/app/components/sections/About'
import Skills from '@/app/components/sections/Skills'
import Contact from '@/app/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Services />
      <WhyHire />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
