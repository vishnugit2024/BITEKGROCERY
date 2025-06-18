"use client";
import React from "react";
import stylebanner from "../../Images/DowloadImage/stylebanner.jpg";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
const StyleBanner1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
        {/* Background Image */}
        <Image
          src={stylebanner}
          alt="Supermarket banner"
          width={1200}
          height={400}
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-start justify-start p-6">
          <div className="text-white space-y-1 md:space-y-3">
            <h3 className="text-lg md:text-2xl font-semibold md:font-bold leading-snug">
              In store or online your health & safety is our top priority
            </h3>
            <p className="text-sm font-medium">
              The only supermarket that makes your life easier, makes you enjoy
              life and makes it better
            </p>
            <Link href="/">
              <button className="bg-white text-black font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition">
                Shop Now <MoveRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleBanner1;
