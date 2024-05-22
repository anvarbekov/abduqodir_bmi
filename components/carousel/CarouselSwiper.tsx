"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

interface CarouselSwiperProps {
  images: string[];
}

export default function CarouselSwiper({ images }: CarouselSwiperProps) {
  return (
    <div className='swiper__container mt-10'>
      <Swiper
        pagination={{ clickable: true }}
        grabCursor={true}
        centeredSlides={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        speed={5000}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        style={{ zIndex: 0 }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img className='swiper__img' width={"100%"} height={"100%"} src={src} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
