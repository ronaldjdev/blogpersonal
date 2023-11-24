import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'

// SwiperCore.use([EffectCoverflow, Navigation, Autoplay])

export const GridSwiper = () => {
  return (
    <div className="swiper-container">
      <div className="swiper-mask">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          speed={800}
          className=" "
        >
          {/* Tus Slides aquí */}
          <SwiperSlide className="w-80">
            <img
              className="rounded-2xl"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Nature 1"
            />
          </SwiperSlide>
          {/* Agrega más Slides según sea necesario */}
        </Swiper>
      </div>
    </div>
  )
}
