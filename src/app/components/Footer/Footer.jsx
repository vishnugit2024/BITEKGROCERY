import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import payment from "../../Images/DowloadImage/paymentsecure.avif";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Images/DowloadImage/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black text-sm">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:flex md:justify-between md:items-center border-b border-gray-400">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">
            Join our newsletter for latest deals & updates
          </h2>
          <p className="text-gray-600 max-w-md">
            Register now to get latest updates on promotions & coupons. Don’t
            worry, we not spam!
          </p>
        </div>
        <form className="flex w-70 justify-end md:w-1/2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-70 px-4 py-3 rounded-l-md bg-white border border-gray-300 focus:outline-purple-600"
          />
          <button
            className=" text-white px-6 rounded-r-md font-semibold"
            style={{ backgroundColor: "var(--purple)" }}
          >
            SEND
          </button>
        </form>
      </div>

      {/* Links section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Help */}
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-30 h-auto m-auto " />
          </Link>
          <div className="my-2 flex items-center gap-4">
            <Phone style={{ color: "var(--purple)" }} />{" "}
            <div className="flex flex-col items-left text-sm">
              <p className=" text-gray-600">Monday-Friday: 08am-9pm</p>
              <p className="text-lg font-bold mt-1">0 800 300-353</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-4">
            <Mail style={{ color: "var(--purple)" }} />{" "}
            <div className="flex flex-col items-left">
              <p className=" text-gray-600">info@autoseligen</p>
              <p className=" text-gray-600">info@autoseligen</p>
            </div>
          </div>
        </div>

        {/* Make Money */}
        <div>
          <h3 className="font-semibold mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
          </ul>
        </div>

        {/* Help You */}
        <div>
          <h3 className="font-semibold mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
          </ul>
        </div>

        {/* Know Us */}
        <div>
          <h3 className="font-semibold mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>{" "}
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>{" "}
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>{" "}
            <li className="hover:underline hover:text-black">
              {" "}
              <Link href="#">Careers for Grogin</Link>
            </li>{" "}
          </ul>
        </div>

        {/* Download + Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow us on social media</h3>
          <div className="flex space-x-3">
            <Link
              href="#"
              target="_blank"
              className="p-2 bg-white text-blue-700 rounded shadow"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-2 bg-white text-blue-800 rounded shadow"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-2 bg-white text-red-600 rounded shadow"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-2 bg-white text-blue-500 rounded shadow"
            >
              <Linkedin />
            </Link>
          </div>
          <div className="mt-8 flex justify-around align-baseline">
            <button
              className="py-3 px-6 text-white rounded font-semibold"
              style={{ backgroundColor: "var(--purple)" }}
            >
              LogIn
            </button>
            <button className="py-3 px-6 bg-black text-white rounded font-semibold">
              SignUP
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center text-sm text-gray-400 py-4 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col">
          <p className="m-0 text-gray-600">
            Copyright 2025 © BITEK GROCERY. All rights reserved. Powered by{" "}
            <Link
              href="https://www.digiindiasolutions.com/"
              target="_blank"
              className="text-indigo-600 font-bold hover:text-indigo-800 underline"
            >
              <span>DIGI INDIA SOLUTIONS</span>.
            </Link>
          </p>
          <Image src={payment} className="h-15 w-70" alt="Visa" />
        </div>
        <div className="flex space-x-3 mt-2 md:mt-0">
          <Link href="#" className="text-gray-600 hover:text-gray-700">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="text-gray-600 hover:text-gray-700">
            Terms of Use
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="text-gray-600 hover:text-gray-700">
            Order Tracking
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
