// @ts-nocheck
import { AboutMe, Container, GlassFrame, GridSwiper, Grids, Hero, InfoCard, Title } from 'components'
import portal from 'assets/images/portal.png'
import circle from 'assets/images/circle.png'
import radar from 'assets/images/radar.png'
import radar2 from 'assets/images/radar2.png'

export const Home = () => {
  return (
    <Container>
      {/* Video Black hole */}

      <div className="relative">
        <Hero />
        <div className="absolute bottom-28">
          <GlassFrame >
            <AboutMe />
          </GlassFrame>
        </div>
      </div>

      {/* Info profile */}

      <div>
      </div>

      {/* Info services */}

      <div>
        <div className="mt-20 mb-40">
          <Title
            title="Impulsa tus proyectos"
            subtitle="Desarrollo web completo para potenciar tu presencia en linea."
          />
        </div>
        <InfoCard
          title="Front-end"
          description="Potencia tu presencia en línea con un desarrollo frontend excepcional"
          image={radar}
        />
        <div className="mt-10">
          <InfoCard
            title="Diseño UX/UI"
            imageOnRight
            description="Destaca la importancia del diseño de interfaz (UI) y cómo puede atraer y cautivar a los usuarios"
            image={portal}
          />
          <InfoCard
            title="Back-end"
            description="Descubre el poder del desarrollo backend, la fuerza invisible que da vida y mantiene en funcionamiento las aplicaciones web"
            image={circle}
          />
        </div>
      </div>

      {/* Info Habilidades */}

      <div>
        <div className="mt-20 mb-40">
          <Title
            title="Skills"
            subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
          />
        </div>
        <div className='flex justify-center items-center pb-5' style={{background:`url(${radar2})`, backgroundPosition:'center'}}>
          <div className="grid place-items-center place-content-center grid-rows-2 grid-cols-2 gap-x-6">
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Lenguajes" size="text-md" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Frameworks" size="text-md" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Librerias" size="text-md" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Herramientas" size="text-md" />
              </div>
              <Grids />
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
