"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import filterimage4 from "../../Images/DowloadImage/filterimage4.jpg";
import filterimage5 from "../../Images/DowloadImage/filterimage5.jpg";
import filterimage6 from "../../Images/DowloadImage/filterimage6.jpg";
import filterimage7 from "../../Images/DowloadImage/filterimage7.jpg";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const bannerData = [
  {
    id: 1,
    imgSrc: filterimage4,
    link: "/category/fruits",
    alt: "Fruits Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 2,
    imgSrc: filterimage5,
    link: "/category/vegetables",
    alt: "Vegetables Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 3,
    imgSrc: filterimage6,
    link: "/category/dairy",
    alt: "Dairy Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
  {
    id: 4,
    imgSrc: filterimage7,
    link: "/category/dairy",
    alt: "Dairy Banner",
    offervalidity: "Only this week",
    imgtext: "Quality Eggs at an affordable price",
  },
];

const FilterCatgory2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
      {bannerData.map((item) => (
        <Link href={item.link} key={item.id} className="block group">
          {/* Adding motion.div to animate when in view */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }} // Initial hidden state
            whileInView={{ opacity: 1, y: 0 }} // State when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
            transition={{ duration: 0.6 }} // Animation duration
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={400}
              height={250}
              className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-start justify-start p-4">
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
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default FilterCatgory2;
