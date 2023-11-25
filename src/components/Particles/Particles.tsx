import {useEffect, useRef } from 'react'
interface Particle {
  angle: number;
  radius: number;
  size: number;
  opacity: number;
  speed: number;
  centerShrinkSpeed: number;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;

    // Set canvas dimensions
    canvas.width = 400;
    canvas.height = 400;

    const createParticles = () => {
      particlesRef.current.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 200 + 100,
        size: 2,
        opacity: 1,
        speed: 0.01,
        centerShrinkSpeed: 0.2,
      });
    };

    const animateParticles = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.angle += particle.speed;
        particle.radius -= particle.centerShrinkSpeed;
        const x = canvas.width / 2 + particle.radius * Math.cos(particle.angle);
        const y = canvas.height / 2 + particle.radius * Math.sin(particle.angle);

        if (particle.size > 0.1) {
          particle.size -= 0.02;
          particle.opacity -= 0.01;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        if (particle.size <= 0.1 && particle.opacity <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });

      if (Math.random() > 0.66) {
        createParticles();
      }

      requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();

    return () => {
      particlesRef.current = [];
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", backgroundColor: "black", margin: "auto" }} />;
};
export const Particles = () => {

  return (
    <>
      <div
        className="absolute flex items-center justify-center inset-0 z-0 border-4 border-white"  
      >
        <ParticleCanvas />
      </div>
    </>
  )
}