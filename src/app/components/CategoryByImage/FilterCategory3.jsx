import React from "react";
import Image from "next/image";
import Link from "next/link";
import filterimage8 from "../../Images/DowloadImage/filterimage8.jpg";
import filterimage9 from "../../Images/DowloadImage/filterimage9.jpg";
import { MoveRight } from "lucide-react";

const bannerData = [
  {
    id: 1,
    imgSrc: filterimage8,
    link: "/category/fruits",
    alt: "Fruits Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 2,
    imgSrc: filterimage9,
    link: "/category/vegetables",
    alt: "Vegetables Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Fruits at an affordable price",
  },
];
const FilterCatgory3 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {bannerData.map((item) => (
        <Link href={item.link} key={item.id} className="block group">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={400}
              height={250}
              className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-start justify-start p-4">
              <div className="text-black space-y-2 max-w-xs">
                <p className="text-sm text-red-800 font-semibold">
                  {item.offervalidity}
                </p>
                <h3 className="max-w-11/12 text-2xl font-bold leading-tight">
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

export default FilterCatgory3;
