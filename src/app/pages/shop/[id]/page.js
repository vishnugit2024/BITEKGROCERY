"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Shuffle,
} from "lucide-react";
import productImage1 from "../../../Images/DowloadImage/about-image-01.jpg";
import productImage2 from "../../../Images/DowloadImage/about-image-02.jpg";
import productImage3 from "../../../Images/DowloadImage/about-image-03.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featureproduct from "@/app/components/FeatureProduct/Featureproduct";

const productData = {
  name: "100 Percent Apple Juice – 64 fl oz Bottle",
  rating: 4.0,
  store: "Machie",
  sku: "KDLKMN23",
  price: 0.5,
  originalPrice: 1.99,
  addedToCartCount: 34,
  shippingInfo: "Shipping within 3 days — Speedy and reliable parcel delivery!",
  paymentInfo:
    "Payment on delivery, Google Pay, online card. 5% discount for cash.",
  warrantyInfo: "No return if the product is properly delivered.",
  images: [productImage1, productImage2, productImage3],
  description: [
    "100% natural apple juice made from freshly picked apples.",
    "No added sugar, preservatives, or artificial flavoring.",
    "Perfect for kids’ lunchboxes and daily hydration.",
    "Packed in a recyclable BPA-free bottle for safety and sustainability.",
    "Rich in vitamin C and antioxidants to support immunity.",
  ],
};

const ProductDetails = () => {
  const {
    name,
    rating,
    store,
    sku,
    price,
    originalPrice,
    addedToCartCount,
    shippingInfo,
    paymentInfo,
    warrantyInfo,
    images,
    description,
  } = productData;

  const [activeTab, setActiveTab] = useState("description");

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image
            src={images[i]}
            alt={`thumb-${i}`}
            className="rounded-md border"
            width={60}
            height={60}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const tabClasses = (tab) =>
    `px-4 py-2 text-sm font-medium border-b-2 ${
      activeTab === tab
        ? "border-green-600 text-green-600"
        : "border-transparent text-gray-600 hover:text-green-600"
    }`;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image Slider */}
        <div className="w-full bg-white rounded-lg">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={img}
                  alt={`product-${index}`}
                  width={500}
                  height={400}
                  className="object-contain w-full h-[450px]"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex items-center text-yellow-500 text-sm mt-1">
            {"★".repeat(Math.floor(rating)) +
              "☆".repeat(5 - Math.floor(rating))}
            <span className="ml-2 text-gray-500">({rating.toFixed(1)})</span>
          </div>
          <div className="text-sm text-gray-500">
            Store: {store} | SKU: {sku}
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-red-600">
              ₹{price.toFixed(2)}
            </span>
            <span className="line-through text-gray-500 text-lg">
              ₹{originalPrice.toFixed(2)}
            </span>
          </div>

          <div className="bg-orange-100 text-orange-800 text-sm px-4 py-2 rounded-md">
            This product has been added to <b>{addedToCartCount} people’s</b>{" "}
            carts.
          </div>

          <div className="border rounded-md px-4 py-3 text-sm text-gray-700 bg-white">
            <b>{shippingInfo}</b>
          </div>

          {/* Quantity + Cart Button */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1">
                <Minus size={16} />
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-1">
                <Plus size={16} />
              </button>
            </div>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition text-sm font-medium flex items-center gap-2">
              <ShoppingCart className="text-white" size={16} /> Add to cart
            </button>
          </div>

          {/* Wishlist / Share / Compare */}
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-700">
            <button className="flex items-center gap-1 hover:text-red-500">
              <Heart size={16} /> View wishlist
            </button>
            <button className="flex items-center gap-1 hover:text-blue-600">
              <Share2 size={16} /> Share this Product
            </button>
            <button className="flex items-center gap-1 hover:text-gray-800">
              <Shuffle size={16} /> Compare
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 pb-5">
        <div className="flex justify-start space-x-4 flex-wrap border-b mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={tabClasses("description")}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={tabClasses("shipping")}
          >
            Shipping Info
          </button>
          <button
            onClick={() => setActiveTab("payment")}
            className={tabClasses("payment")}
          >
            Payment
          </button>
          <button
            onClick={() => setActiveTab("warranty")}
            className={tabClasses("warranty")}
          >
            Warranty
          </button>
        </div>

        <div className="text-sm text-gray-700 space-y-2">
          {activeTab === "description" && (
            <ul className="list-disc pl-5 space-y-1">
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {activeTab === "shipping" && <p>{shippingInfo}</p>}
          {activeTab === "payment" && <p>{paymentInfo}</p>}
          {activeTab === "warranty" && <p>{warrantyInfo}</p>}
        </div>
      </div>
      {/* Related Products */}
      <Featureproduct />
    </>
  );
};

export default ProductDetails;
