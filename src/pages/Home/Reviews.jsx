import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import img from "../../assets/customer-top.png";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviesPromise }) => {
  const reviews = use(reviesPromise);

  return (
    <div className="py-20 bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-12 px-6">
        <img src={img} alt="Customer Top" className="mb-6" />
        <h3 className="text-4xl text-center font-bold text-secondary py-4">
          What our customers are saying
        </h3>
        <p className="text-lg max-w-4xl text-center font-bold text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper px-6"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.userName}>
            <ReviewCard reviews={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
