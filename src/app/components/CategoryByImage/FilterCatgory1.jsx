import React from "react";
import Image from "next/image";
import Link from "next/link";
import filterimage1 from "../../Images/DowloadImage/filterimage1.jpg";
import filterimage2 from "../../Images/DowloadImage/filterimage2.jpg";
import filterimage3 from "../../Images/DowloadImage/filterimage3.jpg";
import { MoveRight } from "lucide-react";

const bannerData = [
  {
    id: 1,
    imgSrc: filterimage1,
    link: "/category/fruits",
    alt: "Fruits Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 2,
    imgSrc: filterimage2,
    link: "/category/vegetables",
    alt: "Vegetables Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 3,
    imgSrc: filterimage3,
    link: "/category/dairy",
    alt: "Dairy Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
];

const FilterCatgory1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {bannerData.map((item) => (
        <Link href={item.link} key={item.id} className="block group">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-start justify-start p-5 mt-1.5">
              <div className="text-black space-y-2 max-w-xs">
                <p className="text-sm text-red-800 font-semibold">
                  {item.offervalidity}
                </p>
                <h3 className="max-w-10/12 text-xl font-bold leading-tight">
                  {item.imgtext}
                </h3>
                <button className="bg-white text-black font-medium px-4 py-2 rounded-full inline-flex items-center hover:outline-1 gap-2 transition">
                  Shop Now <MoveRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FilterCatgory1;
