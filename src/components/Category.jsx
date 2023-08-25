import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import categories from "../categoies.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <div className="max-w-7xl xl:mx-auto px-3 sm:px-4 mx-2 sm:mx-6 md:mx-8 -mt-10 md:-mt-16 mb-4 bg-white relative z-10">
      <h1 className="font-bold my-2">Top Categories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
            480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className="bg-cover bg-center h-28 md:h-28 text-white relative"
              style={{ backgroundImage: category.imageUrl }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto">
                <div className="text-center">
                  <h1 className="text-xl font-semibold">{category.name}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
