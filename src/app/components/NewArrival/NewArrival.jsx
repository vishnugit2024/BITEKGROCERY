"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import product1 from "../../Images/DowloadImage/BasmatiRice.png";
import product2 from "../../Images/DowloadImage/KabuliChana.png";
import product3 from "../../Images/DowloadImage/KabuliChanaBack.png";
import product4 from "../../Images/DowloadImage/MoongDhooli.png";
import product5 from "../../Images/DowloadImage/MoongDhooliBack.png";
import product6 from "../../Images/DowloadImage/Pasta.png";
import toast from "react-hot-toast";
import Link from "next/link";

const NewArrival = () => {
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

  const swiperRef = useRef(null);
  const [addedProducts, setAddedProducts] = useState({});
  const [addedWishlist, setAddedWishlist] = useState({});

  const addToCart = (product) => {
    toast.success(`${product.name} added to cart`);
    setAddedProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }));
  };

  const addToWishlist = (product) => {
    toast.success(`${product.name} added to wishlist`);
    setAddedWishlist((prev) => ({
      ...prev,
      [product.id]: true,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">New Arrivals</h2>
        <Link href="/">
          <button className="flex items-center gap-1 border border-purple-700 text-purple-700 py-1 px-4 rounded-full text-sm hover:bg-purple-100 transition">
            View All
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>

      <div
        onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          navigation
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border border-gray-300 p-2 rounded-lg relative bg-white">
                <div className="absolute top-2 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-e-2xl z-10">
                  {product.discount}
                </div>

                <div className="absolute top-2 right-3 shadow-md bg-white rounded-2xl p-1 text-black cursor-pointer hover:text-red-800">
                  <Heart size={20} onClick={() => addToWishlist(product)} />
                </div>

                <div className="w-50 h-50 flex justify-center items-center mb-2 bg-white">
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="object-contain h-full"
                  />
                </div>

                <h3 className="text-sm font-semibold line-clamp-2 mb-1 hover:underline">
                  {product.name}
                </h3>
                <div className="flex items-center text-sm gap-1 mb-1">
                  <div className="text-yellow-400">★ ★ ★ ★ ★</div>
                  <span className="text-gray-500 text-xs">(3)</span>
                </div>

                <div className="text-lg font-bold text-red-600">
                  {product.newPrice}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {product.oldPrice}
                </div>

                <button
                  className="mt-2 w-full border rounded-full py-1 text-sm text-purple-700 hover:bg-purple-100 hover:font-semibold transition"
                  onClick={() => addToCart(product)}
                  disabled={addedProducts[product.id]}
                >
                  {addedProducts[product.id] ? "Go to cart" : "Add to cart 🛒"}{" "}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
