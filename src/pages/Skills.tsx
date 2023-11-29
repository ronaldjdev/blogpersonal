import { Container } from 'components/Layout/Container/Container'
import { Title } from 'components/Section/Title/Title'
import { Timeline } from 'components/Section/Timeline/Timeline'
import ring from 'assets/images/ring.png'

export const Skills = () => {
  return (
    <>
      <Container>
        <div className="relative mb-40 flex flex-col items-center">
          <img className="w-[800px]" src={ring} />
          <div className="absolute inset-60 mt-20 mb-40">
            <Title
              title="Skills"
              subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
            />
          </div>
        </div>

        <Timeline />
      </Container>
    </>
  )
}
