import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { EffectCoverflow, Autoplay, Navigation } from 'swiper'

export const GridSwiper = () => {
  return (
    <>
      <div className="swiper-cantainer">
        <div className="swiper-mask">
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 0,
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
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className=" "
          >
            <SwiperSlide className="w-80">
              <img
                className="rounded-2xl"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-7.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-8.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80">
              <img
                className="rounded-xl"
                src="https://swiperjs.com/demos/images/nature-9.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
