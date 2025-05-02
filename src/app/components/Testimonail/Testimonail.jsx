"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import Image from "next/image";
import testi1 from "../../Images/DowloadImage/Testi1.jpg";
import testi2 from "../../Images/DowloadImage/Testi2.jpg";
import testi3 from "../../Images/DowloadImage/testi3.jpg";
import testi4 from "../../Images/DowloadImage/testi4.jpg";
import testi5 from "../../Images/DowloadImage/testi5.jpg";
import testi6 from "../../Images/DowloadImage/testi6.jpg";
import testi7 from "../../Images/DowloadImage/testi7.jpg";
import testi8 from "../../Images/DowloadImage/testi8.jpg";
import testi9 from "../../Images/DowloadImage/testi9.jpg";
import testi10 from "../../Images/DowloadImage/testi10.jpg";
const Testimonial = () => {
    const testimonials = [
        {
          name: "Anjali Sharma",
          rating: 4.5,
          count: 58,
          message: "I regularly order groceries for my family — everything is always fresh and delivered on time.",
          image: testi1,
        },
        {
          name: "Priya Verma",
          rating: 4,
          count: 46,
          message: "Very easy to find daily essentials. Prices are good and customer support is helpful.",
          image: testi2,
        },
        {
          name: "Rani Mehra",
          rating: 4.2,
          count: 51,
          message: "Quality of vegetables and fruits is much better than local market. Highly recommended.",
          image: testi3,
        },
        {
          name: "Sunita Rani",
          rating: 3.8,
          count: 39,
          message: "Sometimes delivery is late, but overall a great experience with wide variety of products.",
          image: testi4,
        },
        {
          name: "Karan Patel",
          rating: 4,
          count: 44,
          message: "This is my go-to site for monthly grocery shopping. Good offers and fast delivery.",
          image: testi5,
        },
        {
          name: "Meena Joshi",
          rating: 4.7,
          count: 62,
          message: "Loved the dry fruits quality. Packaging was neat and clean.",
          image: testi6,
        },
        {
          name: "Nikhil Das",
          rating: 3.9,
          count: 41,
          message: "Nice variety of organic products. Would love faster delivery in rural areas.",
          image: testi7,
        },
        {
          name: "Anjali Gupta",
          rating: 4.6,
          count: 59,
          message: "Amazing discounts during festivals! Very happy with my purchase.",
          image: testi8,
        },
        {
          name: "Rajesh Yadav",
          rating: 4,
          count: 50,
          message: "Customer service is responsive. Ordered multiple times without any issues.",
          image: testi9,
        },
        {
          name: "Sneha Iyer",
          rating: 3.5,
          count: 36,
          message: "Good experience overall, just wish they added more South Indian items.",
          image: testi10,
        },
      ];
      

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Our Customers</h2>
        <p className="text-sm text-gray-500">
          Honest feedback from our valued customers.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={5}
        navigation
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-md transition text-sm h-full">
              <Image
                src={t.image}
                alt={t.name}
                className="w-12 h-12 mx-auto rounded-full object-cover mb-2"
              />
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <div className="flex justify-center items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(t.rating) ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1">{t.count}</span>
              </div>

              <hr className="my-2" />
              <p className="text-gray-600 text-xs">{t.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
