"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image1 from "../../Images/slider-01.jpg"
import Image2 from "../../Images/slider-02.jpg"
import Image from 'next/image';

const HomeBanner = () => {
    const slides = [
        { id: 1, img: Image1, alt: 'Slide 1' },
        { id: 2, img: Image2, alt: 'Slide 2' },
        { id: 3, img: Image1, alt: 'Slide 3' },
    ];
    return (
        <>
            <div className="mx-3">
                <div className="w-full max-w-6xl mt-4 mr-0 ml-auto my-6">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Image
                                src={slide.img}
                                alt={slide.alt}
                                className="w-full h-[500px] object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeBanner