// @ts-nocheck
import blackHole from 'assets/videos/black_hole.webm'
import { Badge, Title } from 'components'
import { BsStars } from 'react-icons/bs'

export const Hero = () => {
  return (
    <>
      <section id="hero-black-hole relative">
        <div className="flex justify-center absolute md:inset-16 lg:inset-36">
          <div className="flex flex-col items-center">
            <Badge icon={<BsStars color="white" />} />
            <Title
              title="Crea experiencias digitales impactantes"
              subtitle="Ven y descubre mi mundo"
            />
          </div>
        </div>
        <video className="object-cover" autoPlay loop src={blackHole} />
      </section>
    </>
  )
}
