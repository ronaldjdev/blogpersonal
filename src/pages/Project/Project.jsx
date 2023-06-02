// @ts-nocheck
import React from 'react'
import { Container, FeatureCard, Title } from 'components'
import halo from 'assets/images/halo.png'

const data = [
  {
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    title: 'Título 1',
    description: 'Descripción corta 1',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    title: 'Título 2',
    description: 'Descripción corta 2',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'Título 3',
    description: 'Descripción corta 3',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'Título 4',
    description: 'Descripción corta 4',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-5.jpg',
    title: 'Título 5',
    description: 'Descripción corta 5',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-6.jpg',
    title: 'Título 6',
    description: 'Descripción corta 6',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-7.jpg',
    title: 'Título 7',
    description: 'Descripción corta 7',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-8.jpg',
    title: 'Título 8',
    description: 'Descripción corta 8',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-9.jpg',
    title: 'Título 9',
    description: 'Descripción corta 9',
  }
];

export const Project = () => {
  return (
    <>
      <Container>
        <div className="relative flex flex-col items-center">
          <img className="w-[800px]" src={halo} />
          <div className="absolute inset-80 mt-20 mb-40">
            <Title
              title="Proyectos"
              subtitle="Transformando Ideas en Realidad."
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-40">
          {
            data.map(({ image, title, description }, index) => (
              <div
                key={index}
                className={`${(index + 3) % 3 === 0 ? 'w-full' : 'w-1/2'}`}
              >
                <FeatureCard
                  image={image}
                  title={title}
                  description={description}
                />
              </div>
            ))
          }
        </div>
      </Container>
    </>
  )
}
