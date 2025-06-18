import React from "react";
import ShopBanner from "./ShopBanner";
import product1 from "../../Images/DowloadImage/BasmatiRice.png";
import product2 from "../../Images/DowloadImage/KabuliChana.png";
import product3 from "../../Images/DowloadImage/KabuliChanaBack.png";
import product4 from "../../Images/DowloadImage/MoongDhooli.png";
import product5 from "../../Images/DowloadImage/MoongDhooliBack.png";
import product6 from "../../Images/DowloadImage/Pasta.png";
import { Heart, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Shop = () => {
  const products = [
    {
      id: 1,
      img: product1,
      name: "Basmati Rice",
      discount: "22%",
      oldPrice: "150",
      newPrice: "100",
      description:
        "Premium long-grain basmati rice ideal for biryanis and everyday meals.",
    },
    {
      id: 2,
      img: product2,
      name: "Kabuli Chana",
      discount: "20%",
      oldPrice: "120",
      newPrice: "96",
      description:
        "High-quality white chickpeas perfect for curries and salads.",
    },
    {
      id: 3,
      img: product3,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "140",
      newPrice: "115",
      description:
        "Rich in protein and fiber, great for a healthy vegetarian diet.",
    },
    {
      id: 4,
      img: product4,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "140",
      newPrice: "115",
      description: "Premium grade Kabuli Chana with excellent cooking quality.",
    },
    {
      id: 5,
      img: product5,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "140",
      newPrice: "115",
      description:
        "Wholesome and versatile pulses for a variety of Indian dishes.",
    },
    {
      id: 6,
      img: product6,
      name: "Kabuli Chana Back",
      discount: "18%",
      oldPrice: "140",
      newPrice: "115",
      description: "Naturally grown chickpeas packed with essential nutrients.",
    },
    {
      id: 7,
      img: product1,
      name: "Moong Dhuli",
      discount: "10%",
      oldPrice: "110",
      newPrice: "99",
      description:
        "Split yellow moong dal, easy to cook and gentle on the stomach.",
    },
    {
      id: 8,
      img: product2,
      name: "Moong Dhuli Back",
      discount: "15%",
      oldPrice: "160",
      newPrice: "135",
      description: "Protein-rich lentils ideal for soups, dals, and khichdi.",
    },
    {
      id: 9,
      img: product3,
      name: "Pasta",
      discount: "25%",
      oldPrice: "100",
      newPrice: "75",
      description:
        "Delicious and easy-to-cook pasta made from premium durum wheat.",
    },
  ];

  return (
    <>
      <ShopBanner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between px-5 py-2 bg-gray-200">
          <div className="text-sm text-gray-600 text-left">
            showing 1-12 of 100 results
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            {/* Sort Dropdown */}
            <div>
              <span>Sort by:</span>
              <select className="p-2 text-black  focus:outline-none">
                <option value="latest">Latest</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            {/* Items per page */}
            <div className="flex items-center gap-2">
              <span>Show:</span>
              <select className="p-2 text-black focus:outline-none">
                <option value="20">20 Items</option>
                <option value="40">40 Items</option>
                <option value="50">50 Items</option>
                <option value="60">60 Items</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid md:flex-row flex-col border border-gray-200 bg-white px-2 py-2"
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
                <Link href={`/pages/shop/${product.id}`}>
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
                  <h3
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(212, 252, 121) 0%, rgb(150, 230, 161) 50%)",
                      color: "#166534",
                      maxWidth: "fit-content",
                      padding: "0px 10px",
                      fontSize: "14px",
                    }}
                    className="my-2 text-sm md:text-md font-normal md:font-bold line-clamp-2 hover:underline rounded-l-0 rounded-r-2xl"
                  >
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center text-sm gap-1 mt-1">
                  <div className="text-yellow-400 text-2xl">★ ★ ★ ★ ★</div>
                  <span className="text-gray-500 text-xs">(3)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-2">
                  <div className="text-lg md:text-2xl font-semibold md:font-bold text-red-500">
                    ₹ {product.newPrice}
                  </div>
                  <div className="text-sm text-gray-800 font-bold line-through">
                    ₹ {product.oldPrice}
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

export default Shop;
