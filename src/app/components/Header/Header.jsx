"use client"
import React, { useState } from "react"
import {
  LucideUser,
  LucideHeart,
  LucideShoppingCart,
  LucideSearch,
  LucideChevronDown,
  LucideMapPin,
  LayoutDashboard,
} from "lucide-react"
import Link from "next/link"
import logo from "../../Images/logo.jpg"
import Image from "next/image"

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <header className="w-full">
      {/* Top Strip */}
      <div className="bg-purple-700 text-white text-sm py-3">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between px-4 text-center md:text-left gap-2 md:gap-0">
          <b>FREE delivery & 40% Discount for next 3 orders!</b>
          <b>
            Until the end of the sale:{" "}
            <span className="font-bold">13</span> days{" "}
            <span className="font-bold">12</span> hours{" "}
            <span className="font-bold">17</span> minutes{" "}
            <span className="font-bold">48</span> sec.
          </b>
        </div>
      </div>

      {/* Secondary Bar */}
      <div className="border-b border-gray-300 py-3 px-4 sm:px-6 lg:px-8">
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
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">English</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Spanish</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Hindi</Link>
              </div>
            </div>
            {/* Currency */}
            <div className="relative group">
              <p className="cursor-pointer flex items-center gap-1">
                USD <LucideChevronDown className="w-4 h-4" />
              </p>
              <div className="absolute left-0 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-20">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">USD</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">INR</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">GBP</Link>
              </div>
            </div>
            <Link href="/">Order Tracking</Link>
          </div>
        </div>
      </div>

      {/* Logo + Search + Icons */}
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo & Location */}
          <div className="flex items-center gap-4">
            <Image src={logo} alt="Logo" className="w-24 h-auto" />
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
              <LucideHeart className="mx-auto w-5 h-5" />
              <span>Wishlist</span>
            </div>
            <div className="text-center">
              <LucideShoppingCart className="mx-auto w-5 h-5" />
              <span>Your Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200 shadow-sm">
        <div className="mx-8 flex flex-wrap justify-between items-center pt-3 gap-4">
          {/* All Categories */}
          <div
            className="relative w-[21%] cursor-pointer border border-gray-300 rounded-t-[10px] px-4 py-2 flex justify-between items-center"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div className="flex items-center gap-2 text-base">
              <LayoutDashboard className="w-6 h-6" />
              All Categories
            </div>
            <LucideChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`}
            />

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 w-full sm:w-[300px] bg-white border border-gray-300 transition-all duration-300 ease-in-out z-30 overflow-hidden rounded-b
              ${openDropdown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
              <ul className="text-sm text-gray-700">
                {["Fruits", "Vegetables", "Dairy", "Snacks", "Beverages", "Bakery", "Frozen Foods", "Meat", "Household", "Personal Care"].map((item) => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Menu Links */}
          <ul className="flex flex-wrap gap-5 text-base font-medium text-gray-800">
            <li><Link href="/">Home</Link></li>
            <li className="flex items-center gap-1 cursor-pointer">
              Shop <LucideChevronDown className="w-4 h-4" />
            </li>
            <li>Fruits & Vegetables</li>
            <li>Beverages</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="text-red-600 flex items-center gap-1">
              Trending Products <LucideChevronDown className="w-4 h-4" />
            </li>
            <li className="text-red-600 font-semibold flex items-center gap-1">
              Almost Finished
              <span className="bg-red-500 text-white text-xs px-1 rounded">SALE</span>
              <LucideChevronDown className="w-4 h-4" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
