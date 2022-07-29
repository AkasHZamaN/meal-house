import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import Banner1 from '../../images/foodBanner1.png';
import Banner2 from '../../images/foodBanner2.png';
import Banner3 from '../../images/foodBanner3.png';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SwiperCarousel = () => {
  return (
    <div>
        <div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="object-fill" src={Banner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-fill" src={Banner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-fill" src={Banner3} alt=""/>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  );
};

export default SwiperCarousel;