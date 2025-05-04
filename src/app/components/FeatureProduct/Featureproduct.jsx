"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ArrowRight, Plus } from "lucide-react";
import product1 from "../../Images/DowloadImage/BasmatiRice.png";
import product2 from "../../Images/DowloadImage/KabuliChana.png";
import product3 from "../../Images/DowloadImage/KabuliChanaBack.png";
import product4 from "../../Images/DowloadImage/MoongDhooli.png";
import product5 from "../../Images/DowloadImage/MoongDhooliBack.png";
import product6 from "../../Images/DowloadImage/Pasta.png";
import Link from "next/link";

const Featureproduct = () => {
  const products = [
    {
      id: 1,
      img: product1,
      name: "Basmati Rice",
      discount: "22%",
      oldPrice: "Rs. 150",
      newPrice: "Rs. 100",
    },
    {
      id: 2,
      img: product2,
      name: "Kabuli Chana",
      discount: "20%",
      oldPrice: "Rs. 120",
      newPrice: "Rs. 96",
    },
    {
      id: 3,
      img: product3,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "Rs. 140",
      newPrice: "Rs. 115",
    },
    {
      id: 4,
      img: product4,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "Rs. 140",
      newPrice: "Rs. 115",
    },
    {
      id: 5,
      img: product5,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "Rs. 140",
      newPrice: "Rs. 115",
    },
    {
      id: 6,
      img: product6,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "Rs. 140",
      newPrice: "Rs. 115",
    },
    {
      id: 7,
      img: product1,
      name: "Moong Dhuli",
      discount: "10%",
      oldPrice: "Rs. 110",
      newPrice: "Rs. 99",
    },
    {
      id: 8,
      img: product2,
      name: "Moong Dhuli Back",
      discount: "15%",
      oldPrice: "Rs. 160",
      newPrice: "Rs. 135",
    },
    {
      id: 9,
      img: product3,
      name: "Pasta",
      discount: "25%",
      oldPrice: "Rs. 100",
      newPrice: "Rs. 75",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Featured Products
            </h2>
            <p className="text-sm  max-w-48 md:max-w-full text-gray-500">
              Our most popular products this month
            </p>
          </div>
          <Link href="/">
            <button className="view-all-btn">
              View All <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex md:flex-row flex-col border border-gray-200 bg-white px-2"
            >
              <div className="relative">
                {/* Discount Badge */}
                <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-e-2xl z-10">
                  {product.discount}
                </div>

                {/* Wishlist Icon */}
                <div className="absolute top-2 right-3 bg-white rounded-full p-1 shadow-md hover:text-red-600 cursor-pointer z-10">
                  <Heart size={18} />
                </div>

                {/* Product Image */}
                <Link href={`/product/${product.id}`}>
                  <div className="w-30 h-30 lg:w-50 lg:h-45 md:w-45 md:h-40 flex justify-center m-auto items-center mb-2 bg-white ">
                    <Image
                      src={product.img}
                      alt={product.name}
                      className="object-contain h-full"
                    />
                  </div>
                </Link>
              </div>

              {/* Product Name */}
              <div className="w-full">
                <Link href={`/product/${product.id}`}>
                  <h3 className="mt-2 text-md font-semibold line-clamp-2 hover:underline">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center text-sm gap-1 mt-1">
                  <div className="text-yellow-400 text-xs">★ ★ ★ ★ ★</div>
                  <span className="text-gray-500 text-xs">(3)</span>
                </div>

                {/* Price */}
                <div className="mt-2">
                  <div className="text-lg font-bold text-red-600">
                    {product.newPrice}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="add-to-cart-btn">
                  Add to cart <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featureproduct;
