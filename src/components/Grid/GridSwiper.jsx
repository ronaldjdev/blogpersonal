import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, FreeMode
  , Autoplay, Pagination, Navigation } from "swiper";

export const GridSwiper = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        freeMode ={true}
        centeredSlides={true}
        slidesPerView={"auto"}   
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, FreeMode, Navigation, Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className="w-80"
        >
          <img className="rounded-xl"
            src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}