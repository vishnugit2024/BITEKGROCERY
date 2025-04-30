import React from 'react'
import { LucideUser, LucideHeart, LucideShoppingCart, LucideSearch, LucideChevronDown, LucideMapPin, LucideMenu } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className="w-full">
        {/* Top Purple Strip */}
        <div className="bg-purple-700 text-white text-sm flex justify-between px-4 py-1">
          <div>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
          </div>
          <div>
            Until the end of the sale: <span className="font-bold">13</span> days <span className="font-bold">12</span> hours <span className="font-bold">17</span> minutes <span className="font-bold">48</span> sec.
          </div>
        </div>

        {/* Middle Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">About Us</span>
            <span className="text-sm text-gray-600">My account</span>
            <span className="text-sm text-gray-600">Wishlist</span>
            <span className="text-sm text-gray-600">
              We deliver to you every day from <span className="text-orange-500 font-medium">7:00 to 23:00</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>English <LucideChevronDown className="inline ml-1 w-4 h-4" /></span>
            <span>USD <LucideChevronDown className="inline ml-1 w-4 h-4" /></span>
            <span>Order Tracking</span>
          </div>
        </div>

        {/* Main Header with Search */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo & Location */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-purple-700">grogin<span className="text-sm">.com</span></div>
            <div className="flex items-center text-gray-700 text-sm">
              <LucideMapPin className="w-4 h-4 mr-1" /> Deliver to <span className="ml-1 font-medium">all</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="flex items-center border rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="w-full px-4 py-2 outline-none"
              />
              <button className="px-4 py-2 bg-gray-100">
                <LucideSearch className="text-gray-600 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <div className="text-center text-sm">
              <LucideUser className="mx-auto w-5 h-5" />
              <span>Account</span>
            </div>
            <div className="relative text-xl">
              <LucideHeart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </div>
            <div className="relative text-xl">
              <LucideShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex items-center px-4 border-t text-sm font-medium">
          <div className="px-4 py-3 border-r flex items-center gap-2 cursor-pointer">
            <LucideMenu className="w-5 h-5" /> All Categories <LucideChevronDown className="w-4 h-4" />
          </div>
          <ul className="flex gap-6 ml-6 py-3">
            <li className="border-b-2 border-purple-700 pb-1">Home</li>
            <li className="flex items-center gap-1">Shop <LucideChevronDown className="w-4 h-4" /></li>
            <li>Fruits & Vegetables</li>
            <li>Beverages</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="flex items-center gap-1 text-red-600">Trending Products <LucideChevronDown className="w-4 h-4" /></li>
            <li className="text-red-600 font-semibold flex items-center gap-1">
              Almost Finished <span className="bg-red-500 text-white text-xs px-1 rounded">SALE</span> <LucideChevronDown className="w-4 h-4" />
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
};

export default Header;
