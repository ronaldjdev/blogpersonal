// @ts-nocheck
import { AboutMe, Container, GlassFrame, GridSwiper, Hero, InfoCard, Title } from 'components'
import portal from 'assets/images/portal.png'
import circle from 'assets/images/circle.png'
import radar from 'assets/images/radar.png'

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
        <div  className="mt-20 mb-40">
          <Title
            title="Skills"
            subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
          />
        </div>
        <div>
          <GridSwiper />
        </div>
      </div>

    </Container>
  )
}
