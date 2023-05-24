// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";
export const GridSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-blue-500">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide className="bg-blue-500 flex justify-center">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-blue-500 flex justify-center">Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
    </>
  );
}