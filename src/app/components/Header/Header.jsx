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
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import logo from "../../Images/DowloadImage/logo.jpg";
import Image from "next/image";
import { LucideMenu, LucideX } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAlmostOpen, setIsAlmostOpen] = useState(false);
  // Dropdown items

  const trendingItems = [
    { label: "Today", href: "/trending/today" },
    { label: "This Week", href: "/trending/week" },
    { label: "This Month", href: "/trending/month" },
  ];
  const almostFinishedItems = [
    { label: "Flash Deals", href: "/deals/flash" },
    { label: "Last 24 Hours", href: "/deals/last-24-hours" },
    { label: "Clearance Sale", href: "/deals/clearance" },
  ];

  return (
    <header className="w-full">
      {/* Top Strip */}
      <div
        style={{ backgroundColor: "var(--purple)" }}
        className=" text-white text-sm py-3"
      >
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between px-4 text-center md:text-left gap-2 md:gap-0 p2-4">
          <b>
            <Typewriter
              words={[
                "FREE delivery on all orders!",
                "40% Discount for next 3 orders!",
                "Limited Time Offer — Grab Now!",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </b>

          <b>
            <Typewriter
              words={[
                "Sale ends in: 13 days 12 hrs 17 mins 48 sec.",
                "Hurry! Only a few days left!",
                "Countdown is running fast!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </b>
        </div>
      </div>

      {/* Secondary Bar */}
      <motion.div
        className="border-b border-gray-300 py-3 px-4 sm:px-6 lg:px-8 hidden md:block"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto flex flex-wrap justify-between items-center gap-3 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/pages/about">About Us</Link>
            <Link href="/pages/login">My Account</Link>
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
      </motion.div>

      <motion.div
        className="max-w-7xl  mx-auto py-4 hidden md:block"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo & Location */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-24 h-auto" />
            </Link>
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <LucideMapPin className="w-9 h-9 bg-gray-300 rounded-full p-2" />
              Deliver to <span className="ml-1 font-medium">all</span>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            className="flex-1 max-w-2xl mx-2 w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
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
          </motion.div>

          {/* Icons */}
          <motion.div
            className="flex gap-4 items-center text-sm"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <Link href={"/pages/login"}>
                <LucideUser className="mx-auto w-5 h-5" />
                <span>Account</span>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/pages/wishlist">
                <LucideHeart className="mx-auto w-5 h-5" />
                <span>Wishlist</span>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/pages/cart">
                <LucideShoppingCart className="mx-auto w-5 h-5" />
                <span>Your Cart</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="max-w-7xl border-b border-gray-200 mx-auto hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.nav
          className="bg-white  rounded-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-stretch">
            {/* All Categories */}
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="relative w-[250px] border border-b-0 border-gray-200 rounded-t-[10px] rounded-b-none cursor-pointer flex items-center justify-between px-4 py-3"
            >
              <div className="flex items-center gap-2 font-medium">
                <LayoutDashboard className="w-5 h-5" />
                All Categories
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${openDropdown ? "rotate-180" : ""
                  }`}
              />
              {/* Dropdown */}
              <motion.div
                className={`absolute top-full left-0 w-full bg-white text-gray-800 border-1 border-gray-200 border-t-0 rounded-b z-30 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{
                  maxHeight: openDropdown ? 500 : 0,
                  opacity: openDropdown ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.ul
                  className="divide-y divide-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
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
                    <motion.li
                      key={item}
                      className="px-4 py-3 hover:bg-purple-50 cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link className="font-medium" href="/pages/wishlist">
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <motion.ul
              className="flex-1 flex items-center justify-between px-6 py-3 text-gray-700 font-medium text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {[
                { label: "Home", url: "/" },
                { label: "Shop", url: "/pages/shop" },
                { label: "Fruits & Vegetables", url: "/fruits-vegetables" },
                { label: "Beverages", url: "/beverages" },
                { label: "Blog", url: "/pages/blog" },
                { label: "Contact", url: "/pages/contact" },
              ].map((item, index) => (
                <motion.li
                key={index}
                className="hover:text-purple-600 transition font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link href={item.url} className="flex items-center gap-1">{item.label}</Link>
              </motion.li>
              ))}

              {/* Trending Dropdown */}
              <motion.li
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <div className="flex items-center gap-1 text-red-600 font-medium cursor-pointer">
                  <Link href="/" className="flex items-center gap-1">
                    Trending <ChevronDown className="w-4 h-4" />
                  </Link>
                </div>

                {/* Dropdown */}
                <motion.ul
                  className={`absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 z-10 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {trendingItems.map((item) => (
                    <motion.li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.li>

              {/* Almost Finished Dropdown */}
              <motion.li
                className="relative"
                onMouseEnter={() => setIsAlmostOpen(true)}
                onMouseLeave={() => setIsAlmostOpen(false)}
              >
                <div className="flex items-center gap-2 text-red-600 font-medium cursor-pointer">
                  <Link href="/" className="flex items-center gap-2">
                    Almost Finished
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                      SALE
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                </div>

                {/* Dropdown */}
                <motion.ul
                  className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 z-10 ${isAlmostOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isAlmostOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {almostFinishedItems.map((item) => (
                    <motion.li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.li>
            </motion.ul>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile responsive navbar */}
      <div className="flex items-center justify-between p-2 md:hidden bg-white border-b border-gray-300">
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsSidebarOpen(true)}
        >
          <LucideMenu className="w-6 h-6" />
        </button>

        <Link href="/">
          <Image src={logo} alt="Logo" className="w-24 h-auto" />
        </Link>

        <Link className="cart-responsive" href="/">
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
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>
          <button onClick={() => setIsSidebarOpen(false)}>
            <LucideX className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-4 text-gray-800">
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Home</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/pages/shop">Shop</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Fruits & Vegetables</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Beverages</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/">Blog</Link></li>
          <li className="border-b-1 border-gray-300 font-medium"><Link href="/pages/contact">Contact</Link></li>
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
              <Link href="/pages/about">About Us</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="font-bold text-gray-400">Contact Details</p>
          <ul>
            <li className="mb-4">
              <Link
                className="flex gap-2"
                target="_blank"
                href="tell:9319846114"
              >
                <PhoneCall /> 9319-846-114
              </Link>
              <div>
                <span>You can call anytime front 9am to 6pm.</span>
              </div>
            </li>
            <li>
              <Link
                className="flex gap-2"
                target="_blank"
                href="mailto:testing@gmail.com"
              >
                <Send /> testing@gmail.com
              </Link>
              <div>
                <span>You can call anytime front 9am to 6pm.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
