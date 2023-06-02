// @ts-nocheck
import React from 'react'
import { Container, FeatureCard, SearchBar, Title } from 'components'
import stars2 from 'assets/images/stars2.png'

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
  },
]

export const Project = () => {
  return (
    <>
      <Container pages>
        <div className="relative">
          <div className="absolute z-0 w-full bg-hero-page inset-x-0 -top-20 h-[800px]"></div>
          <div className="relative h-[500px] z-10 flex flex-col justify-center items-center">
            <div className="">
              <Title
                title="Creando productos digitales innovadores"
                subtitle="Llevando la experiencia digital al siguiente nivel."
              />
            </div>
            <div className="flex items-center"><SearchBar /></div>
          </div>
          <div
            className="relative flex flex-col z-10 rounded-t-[40px] px-10 py-12 w-full"
            style={{
              backgroundImage: `url(${stars2})`,
              backgroundColor: ' #030014 ',
              backgroundPosition: '50%',
            }}
          >
            <div className="flex w-full justify-center  flex-wrap mb-40">
              {data.map(({ image, title, description }, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
