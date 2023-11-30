import { Container } from 'components/Layout/Container/Container'
import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import { ProjectSlider } from 'components/Slider/ProjectSlider'
import { AboutMe } from 'components/Section/AboutMe/AboutMe'
import { Title } from 'components/Section/Title/Title'
import { Hero } from 'components/Section/Hero/Hero'
import { Services } from 'components/Section/Services/Services'
import { Skills } from './Skills'
import { Contact } from './Contact'

import halo from 'assets/images/halo.png'

export const Home = () => {


  return (
    <Container>
      {/* Video Black hole */}

      <div className="relative">
        <Hero />
        <div className="absolute bottom-28">
          <GlassFrame>
            <AboutMe />
          </GlassFrame>
        </div>
      </div>

      {/* Info services */}

      <Services />

      {/* Info Habilidades */}

      <Skills />
      {/* Info Proyectos */}

      <div className="relative flex flex-col items-center">
        <img className="w-[800px]" src={halo} />
        <div className="absolute inset-80 mt-20 mb-40">
          <Title
            title="Proyectos"
            subtitle="Transformando Ideas en Realidad."
          />
        </div>
      </div>
      <div className="mb-40">
        <ProjectSlider />
      </div>

      {/* Info ContactForm */}
      <Contact />
    </Container>
  )
}
