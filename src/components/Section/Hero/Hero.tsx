import blackHole from 'assets/videos/black_hole.webm'
import { Badge } from 'components/Button/Badge/Badge'
import { Particles } from 'components/Particles/Particles'
import { Title } from '../Title/Title'
import { BsStars } from 'react-icons/bs'

export const Hero = () => {
  return (
    <>
      <section id="hero-black-hole" className="hero">
        <div className="flex justify-center z-1 absolute md:inset-16 lg:inset-30">
          <div className="flex flex-col items-center">
            <div>
              <Badge icon={<BsStars color="white" />} />
            </div>
            <Title
              title="Tienes una gran idea en mente"
              subtitle="Discutamos lo que podemos lograr juntos"
            />
          </div>
        </div>
        <Particles />
        <video className="object-cover3" autoPlay loop src={blackHole} />
      </section>
    </>
  )
}
