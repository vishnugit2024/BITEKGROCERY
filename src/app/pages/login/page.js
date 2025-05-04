import React from "react";
import stylebanner from "../../Images/DowloadImage/stylebanner.jpg";
import Image from "next/image";
const page = () => {
  return (
    <>
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
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex items-start justify-start p-6">
            <div className="text-white space-y-3">
              <h3 className="text-2xl font-bold leading-snug">
                In store or online your health & safety is our top priority
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
