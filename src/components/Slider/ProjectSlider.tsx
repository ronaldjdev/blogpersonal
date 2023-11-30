import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'
import { ProjectSliderItem } from './ProjectSliderItem'
import 'swiper/swiper-bundle.css'

export const ProjectSlider = () => {
  const dataSlider = [
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/522d6a86-0dcf-4554-8b22-7655d65a1f66_opt.png',
      url: 'https://www.innova.com.co/',
    },
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/9b5f71cb-34a3-4fb4-a3a6-0ce9557c0acd_opt.png',
      url: 'https://www.innova.com.co/',

    },
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/10cfd52d-e217-41e9-bb8b-ad43384a5e63_opt.png',
      url: 'https://www.innova.com.co/',

    },
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/b9669f2a-17fc-47dc-b6b5-3f863004efa8_opt.png',
      url: 'https://www.innova.com.co/',

    },
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/31979576-5060-4513-aae2-b379b87e7fe6_opt.png',
      url: 'https://www.innova.com.co/',

    },
    {
      corp: 'Innova',
      name: 'Innova',
      image: 'https://alca.tv/static/u/429b83b8-1ad4-4450-b0de-0a0c1073cf1e_opt.jpg',
      url: 'https://www.innova.com.co/',

    },
  ]
  return (
    <div className="swiper-container">
      <div className="swiper-mask">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          speed={800}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className=" "
        >
          {/* Tus Slides aquí */}
          {dataSlider.map((data, index) => (

            <SwiperSlide key={index} className="w-80 h-96" >
              <ProjectSliderItem index={index + 1} {...data} />
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div >
  )
}
