import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazon_vector,
  randstad,
  star,
  start_people,
  amazon,
  moonstar,
  casio,
];
const Brands = () => {
  return (
    <>
      <h1 className="text-4xl text-center py-8 font-bold text-secondary">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="border-dashed text-gray-500 max-w-5xl mx-auto mt-14" />
    </>
  );
};

export default Brands;
