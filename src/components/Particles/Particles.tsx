import { ParticleCanvas } from './ParticleCanvas';
export const Particles = () => {

  return (
    <>
      <div
        className="absolute flex items-center justify-center pt-40 inset-0 z-0 "
      >
        <ParticleCanvas />
      </div>
    </>
  )
}