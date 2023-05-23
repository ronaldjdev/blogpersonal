// @ts-nocheck
import { AboutMe, Hero, InfoCard, Title } from 'components'
import portal from "assets/images/portal.png"
import circle from "assets/images/circle.png"
import radar from "assets/images/radar.png"

export const Home = () => {
  return (
    <>
      {/* Video Black hole */}

      <div>
        <Hero />
      </div>

      {/* Info profile */}

      <div>
        <AboutMe />
      </div>

      {/* Info services */}

      <div>
        <div>
          <Title
            title="Impulsa tus proyectos"
            subtitle="Desarrollo web completo para potenciar tu presencia en linea."
          />
        </div>
        <div>
          <InfoCard
            title="Diseño UX/UI"
            description="Destaca la importancia del diseño de interfaz (UI) y cómo puede atraer y cautivar a los usuarios"
            image={portal}
          />
          <InfoCard
            title="Front-end"
            description="Potencia tu presencia en línea con un desarrollo frontend excepcional"
            imageOnRight
            image={radar}
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
        <div>
          <Title
            title="Skills"
            subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
          />
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}
