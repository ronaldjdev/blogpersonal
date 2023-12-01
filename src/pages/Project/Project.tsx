import { useState } from 'react';
import { Container } from 'components/Layout/Container/Container'
import { FeatureCard } from 'components/Cards/FeatureCard/FeatureCard'
import { Paginated } from 'components/Paginated/Paginated'
import { SearchBar } from 'components/Bar/Searchbar/SearchBar'
import { Title } from 'components/Section/Title/Title'
import stars2 from 'assets/images/stars2.png'

const data = [
  {
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    title: 'titulo 1',
    description: 'Descripción corta 1',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    title: 'titulo 2',
    description: 'Descripción corta 2',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'titulo 3',
    description: 'Descripción corta 3',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'titulo 4',
    description: 'Descripción corta 4',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-5.jpg',
    title: 'titulo 5',
    description: 'Descripción corta 5',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-6.jpg',
    title: 'titulo 6',
    description: 'Descripción corta 6',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-7.jpg',
    title: 'titulo 7',
    description: 'Descripción corta 7',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-8.jpg',
    title: 'titulo 8',
    description: 'Descripción corta 8',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-9.jpg',
    title: 'titulo 9',
    description: 'Descripción corta 9',
  },
]

export const Project = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filteredData) => {
    setFilteredData(filteredData);
  };
  return (
    <>
      <Container pages>
        <div className="relative">
          <div className="absolute z-0 w-full bg-hero-page inset-x-0 -top-40 h-[800px]"></div>
          <div className="relative h-[500px] z-10 flex flex-col justify-center items-center">
            <div className="">
              <Title
                title="Creando productos digitales innovadores"
                subtitle="Llevando la experiencia digital al siguiente nivel."
              />
            </div>
            <div className="flex items-center">
              <SearchBar data={data} onSearch={handleSearch} />
            </div>
          </div>
          <div
            className="relative flex flex-col z-10 rounded-t-[40px] px-10 py-12 w-full"
            style={{
              backgroundImage: `url(${stars2})`,
              backgroundColor: ' #030014 ',
              backgroundPosition: '50%',
            }}
          >
            <div className="flex w-full justify-center gap-y-6 flex-wrap ">
              {filteredData.map(({ image, title, description }, index) => (
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
            <div className="my-10">
              <Paginated />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
