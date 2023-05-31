// @ts-nocheck
import React from 'react'

import {
  AboutMe,
  ContactForm,
  Container,
  GlassFrame,
  GridSwiper,
  Grids,
  Hero,
  InfoCard,
  Title,
} from 'components'
import portal from 'assets/images/portal.png'
import radar2 from 'assets/images/radar2.png'
import ring from 'assets/images/ring.png'
import backImg from 'assets/svg/back-img.svg'
import apiImg from 'assets/svg/api-img.svg'
import frontImg from 'assets/svg/front-img.svg'
import uxUiImg from 'assets/svg/ux-ui.svg'
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

      <div className="relative flex flex-col items-center">
        <img className="w-[800px]" src={portal} />
        <div className="absolute inset-40 mt-20 mb-40">
          <Title
            title="Impulsa tus proyectos"
            subtitle="Desarrollo web completo para potenciar tu presencia en linea."
          />
        </div>
      </div>
      <div className="">
        <InfoCard
          title="Diseño UX/UI"
          description="Destaca la importancia del diseño de interfaz (UI) y cómo puede atraer y cautivar a los usuarios"
          image={uxUiImg}
          svg={uxUiImg}
        />
        <InfoCard
          title="Front-end"
          description="Potencia tu presencia en línea con un desarrollo frontend excepcional"
          imageOnRight
          image={frontImg}
          svg={frontImg}
        />
        <InfoCard
          title="Back-end"
          description="Descubre el poder del desarrollo backend, la fuerza invisible que da vida y mantiene en funcionamiento las aplicaciones web"
          image={apiImg}
          // image={backImg}
          svg={backImg}
        />
      </div>

      {/* Info Habilidades */}

      <div className="relative mb-40 flex flex-col items-center">
        <img className="w-[800px]" src={ring} />
        <div className="absolute inset-60 mt-20 mb-40">
          <Title
            title="Skills"
            subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
          />
        </div>
      </div>

      <div
        className="flex justify-center items-center mb-40 pb-5"
        style={{ background: `url(${radar2})`, backgroundPosition: 'center' }}
      >
        <div className="grid place-items-center place-content-center grid-rows-2 grid-cols-2 gap-x-6">
          <div className="flex flex-col items-center ">
            <div>
              <Title title="Lenguajes" size="text-2xl" />
            </div>
            <Grids />
          </div>
          <div className="flex flex-col items-center ">
            <div>
              <Title title="Frameworks" size="text-2xl" />
            </div>
            <Grids />
          </div>
          <div className="flex flex-col items-center ">
            <div>
              <Title title="Librerias" size="text-2xl" />
            </div>
            <Grids />
          </div>
          <div className="flex flex-col items-center ">
            <div>
              <Title title="Herramientas" size="text-2xl" />
            </div>
            <Grids />
          </div>
        </div>
      </div>
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
        <GridSwiper />
      </div>

      {/* Info ContactForm */}

      <div className="relative mb-40 flex flex-col items-center">
        <img className="w-[800px]" src={ring} />
        <div className="absolute inset-60 mt-20 mb-40">
          <Title
            title="El siguiente paso es tuyo"
            subtitle="Estoy ansioso por escuchar sobre tu nuevo proyecto."
          />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </Container>
  )
}
