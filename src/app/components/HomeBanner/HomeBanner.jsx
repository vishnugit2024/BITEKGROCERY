"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from "../../Images/DowloadImage/slider-01.jpg";
import Image2 from "../../Images/DowloadImage/slider-02.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const slides = [
    { id: 1, img: Image1, alt: "Slide 1" },
    { id: 2, img: Image2, alt: "Slide 2" },
    { id: 3, img: Image1, alt: "Slide 3" },
  ];

  return (
    <section className="w-[78%] ml-auto py-3 bg-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-2xl overflow-hidden"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <motion.div
                  className="relative w-full aspect-[16/9] md:aspect-[16/6]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    priority
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner;
