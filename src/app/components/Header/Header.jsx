"use client";
import React, { useState } from "react";
import {
  LucideUser,
  LucideHeart,
  LucideShoppingCart,
  LucideSearch,
  LucideChevronDown,
  LucideMapPin,
  LayoutDashboard,
  ShoppingCart,
  PhoneCall,
  Send,
} from "lucide-react";
import Link from "next/link";
import logo from "../../Images/DowloadImage/logo.jpg";
import Image from "next/image";
import { LucideMenu, LucideX } from "lucide-react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Strip */}
      <div className="bg-purple-700 text-white text-sm py-3">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between px-4 text-center md:text-left gap-2 md:gap-0">
          <b>FREE delivery & 40% Discount for next 3 orders!</b>
          <b>
            Until the end of the sale: <span className="font-bold">13</span>{" "}
            days <span className="font-bold">12</span> hours{" "}
            <span className="font-bold">17</span> minutes{" "}
            <span className="font-bold">48</span> sec.
          </b>
        </div>
      </div>

      {/* Secondary Bar */}
      <div className="border-b border-gray-300 py-3 px-4 sm:px-6 lg:px-8 hidden md:block">

        <div className="mx-auto flex flex-wrap justify-between items-center gap-3 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/">About Us</Link>
            <Link href="/">My Account</Link>
            <Link href="/">Wishlist</Link>
            <span>|</span>
            <span>We deliver to you every day from</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Language */}
            <div className="relative group">
              <p className="cursor-pointer flex items-center gap-1">
                English <LucideChevronDown className="w-4 h-4" />
              </p>
              <div className="absolute left-0 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-20">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  English
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Spanish
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Hindi
                </Link>
              </div>
            </div>
            {/* Currency */}
            <div className="relative group">
              <p className="cursor-pointer flex items-center gap-1">
                USD <LucideChevronDown className="w-4 h-4" />
              </p>
              <div className="absolute left-0 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-20">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  USD
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  INR
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  GBP
                </Link>
              </div>
            </div>
            <Link href="/">Order Tracking</Link>
          </div>
        </div>
      </div>

      {/* Logo + Search + Icons */}
      <div className="max-w-7xl mx-auto py-4 hidden md:block">
        <div className="mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo & Location */}
          <div className="flex items-center gap-4">
            <Link href="/" >
              <Image src={logo} alt="Logo" className="w-24 h-auto" />
            </Link>
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <LucideMapPin className="w-9 h-9 bg-gray-300 rounded-full p-2" />
              Deliver to <span className="ml-1 font-medium">all</span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-2 w-full">
            <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="w-full px-4 py-2 outline-none text-sm bg-transparent"
              />
              <button className="px-4 py-2 text-gray-600">
                <LucideSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-4 items-center text-sm">
            <div className="text-center">
              <LucideUser className="mx-auto w-5 h-5" />
              <span>Account</span>
            </div>
            <div className="text-center">
             <Link href={"/pages/wishlist"}>
             <LucideHeart className="mx-auto w-5 h-5" />
             <span>Wishlist</span>
             </Link>
            </div>
            <div className="text-center">
              <LucideShoppingCart className="mx-auto w-5 h-5" />
              <span>Your Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto hidden md:block px-4">
        <nav className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
          <div className="flex items-stretch">

            {/* All Categories */}
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="relative w-[250px] bg-purple-600 text-white rounded-l-lg cursor-pointer flex items-center justify-between px-4 py-3"
            >

              <div className="flex items-center gap-2 font-medium">
                <LayoutDashboard className="w-5 h-5" />
                All Categories
              </div>
              <LucideChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""
                  }`}
              />

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 w-full bg-white text-gray-800 border border-t-0 rounded-b shadow-md z-30 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                  }`}
              >
                <ul className="divide-y divide-gray-200">
                  {[
                    "Fruits",
                    "Vegetable",
                    "Dairy",
                    "Snacks",
                    "Beverages",
                    "Bakery",
                    "Frozen Foods",
                    "Meat",
                    "Household",
                    "Personal Care",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-3 hover:bg-purple-50 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Links */}
            <ul className="flex-1 flex items-center justify-between px-6 py-3 text-gray-700 font-medium text-base">
              <li>
                <Link href="/" className="hover:text-purple-600 transition">Home</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-purple-600 cursor-pointer transition">
                Shop <LucideChevronDown className="w-4 h-4" />
              </li>
              <li className="hover:text-purple-600 transition">Fruits & Vegetables</li>
              <li className="hover:text-purple-600 transition">Beverages</li>
              <li className="hover:text-purple-600 transition">Blog</li>
              <li className="hover:text-purple-600 transition">Contact</li>
              <li className="text-red-600 flex items-center gap-1 cursor-pointer hover:underline">
                Trending <LucideChevronDown className="w-4 h-4" />
              </li>
              <li className="text-red-600 font-semibold flex items-center gap-2 cursor-pointer">
                Almost Finished
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                  SALE
                </span>
                <LucideChevronDown className="w-4 h-4" />
              </li>
            </ul>
          </div>
        </nav>
      </div>




      {/* Mobile responsive navbar */}
      <div className="flex items-center justify-between p-2 md:hidden bg-white border-b border-gray-300">
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsSidebarOpen(true)}
        >
          <LucideMenu className="w-6 h-6" />
        </button>

        <Link href="/" >
          <Image src={logo} alt="Logo" className="w-24 h-auto" />
        </Link>

        <Link className="cart-responsive" href="/" >
          <ShoppingCart />
        </Link>

      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 p-3 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Link href="/" >
            <Image src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>
          <button onClick={() => setIsSidebarOpen(false)}>
            <LucideX className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-4 text-gray-800">
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Home</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Shop</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Fruits & Vegetables</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Beverages</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Blog</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Contact</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Trending Products</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Almost Finished</Link></li>
        </ul>
        <div className="mt-5">
          <p className="font-bold text-gray-400">Bitek Mart Helpers</p>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Order Tracking</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="font-bold text-gray-400">Contact Details</p>
          <ul>
            <li className="mb-4">
              <Link className="flex gap-2" target="_blank" href="tell:9319846114"><PhoneCall /> 9319-846-114</Link>
              <div><span>You can call anytime front 9am to 6pm.</span></div>
            </li>
            <li>
              <Link className="flex gap-2" target="_blank" href="mailto:testing@gmail.com"><Send /> testing@gmail.com</Link>
              <div><span>You can call anytime front 9am to 6pm.</span></div>
            </li>
          </ul>
        </div>
      </div>
    </header>

  );
};

export default Header;
