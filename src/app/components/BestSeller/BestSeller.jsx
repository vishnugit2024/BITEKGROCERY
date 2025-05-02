"use client";
import Image from "next/image";
import { Heart, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

// Sample product data with placeholder images
const products = [
  {
    id: 1,
    name: "Basmati Rice",
    discount: "22%",
    oldPrice: "Rs. 150",
    newPrice: "Rs. 100",
  },
  {
    id: 2,
    name: "Kabuli Chana",
    discount: "20%",
    oldPrice: "Rs. 120",
    newPrice: "Rs. 96",
  },
  {
    id: 3,
    name: "Kabuli Chana Back",
    discount: "18%",
    oldPrice: "Rs. 140",
    newPrice: "Rs. 115",
  },
  {
    id: 4,
    name: "Moong Dhooli",
    discount: "18%",
    oldPrice: "Rs. 140",
    newPrice: "Rs. 115",
  },
  {
    id: 5,
    name: "Moong Dhooli Back",
    discount: "18%",
    oldPrice: "Rs. 140",
    newPrice: "Rs. 115",
  },
  {
    id: 6,
    name: "Pasta",
    discount: "18%",
    oldPrice: "Rs. 140",
    newPrice: "Rs. 115",
  },
  {
    id: 7,
    name: "Basmati Rice Premium",
    discount: "10%",
    oldPrice: "Rs. 110",
    newPrice: "Rs. 99",
  },
  {
    id: 8,
    name: "Moong Dhuli Special",
    discount: "15%",
    oldPrice: "Rs. 160",
    newPrice: "Rs. 135",
  },
  {
    id: 9,
    name: "Pasta Premium",
    discount: "25%",
    oldPrice: "Rs. 100",
    newPrice: "Rs. 75",
  },
];

const BestSeller = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Best Sellers</h2>
          <p className="text-sm text-gray-500">
            Our most popular products this month
          </p>
        </div>
        <Link href="/">
          <button className="flex items-center gap-1 border border-purple-700 text-purple-700 py-1 px-4 rounded-full text-sm hover:bg-purple-100 transition">
            View All <ArrowRight size={16} />
          </button>
        </Link>
      </div>

      {/* Product Grid - Horizontal cards with improved layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row border border-gray-200 rounded-lg bg-white p-3 hover:shadow-md transition-shadow"
          >
            {/* Left side - Image with badges */}
            <div className="relative w-1/3 mr-3">
              {/* Discount Badge */}
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-br-lg z-10">
                {product.discount}
              </div>

              {/* Wishlist Icon */}
              <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm hover:text-red-600 cursor-pointer z-10">
                <Heart size={18} />
              </div>

              {/* Product Image - Using placeholder */}
              <div className="h-28 flex justify-center items-center">
                <Image
                  src={`/placeholder.svg?height=112&width=112&text=${encodeURIComponent(
                    product.name
                  )}`}
                  alt={product.name}
                  width={112}
                  height={112}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>

            {/* Right side - Product details */}
            <div className="w-2/3 flex flex-col justify-between">
              {/* Product Name */}
              <div>
                <h3 className="text-sm font-semibold line-clamp-2 hover:underline">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <div className="text-yellow-400 text-xs">★ ★ ★ ★ ★</div>
                  <span className="text-gray-500 text-xs">(3)</span>
                </div>
              </div>

              <div className="mt-auto">
                {/* Price */}
                <div className="flex items-end gap-2">
                  <div className="text-lg font-bold text-red-600">
                    {product.newPrice}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="flex items-center justify-between mt-2 w-full border border-purple-700 rounded-full py-1 px-3 text-xs text-purple-700 hover:bg-purple-100 transition">
                  Add to cart <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
