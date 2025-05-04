import React from "react";
import Image from "next/image";
import banner from "../../Images/DowloadImage/shopbanner.webp";
const ShopBanner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="relative rounded-xl overflow-hidden group">
          {/* Background Image */}
          <Image
            src={banner}
            alt="Supermarket banner"
            width={1200}
            height={400}
            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-start p-6">
            <div className="text-black space-y-3 max-w-lg">
              <h3 className="text-xl md:text-4xl font-bold leading-snug">
                Grocery store with different treasures
              </h3>
              <p className="text-sm md:text-md text-gray-500 font-medium">
                We have prepared special discount for you on grocery products
              </p>
              {/* Optional Button */}
              {/* <Link href="/">
          <button className="bg-white text-black font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition">
            Shop Now <MoveRight size={14} />
          </button>
        </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
