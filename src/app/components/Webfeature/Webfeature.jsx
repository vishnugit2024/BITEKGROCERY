"use client";
import React from "react";
import payment from "../../Images/DowloadImage/payment.png";
import discount from "../../Images/DowloadImage/discount.png";
import truck from "../../Images/DowloadImage/truck.png";
import veritable from "../../Images/DowloadImage/veritable.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Webfeature = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
      {/* Feature Item 1 */}
      <motion.div
        className="flex items-center gap-4 w-full sm:w-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={payment} alt="Secure Payment" width={50} height={50} />
        <div className="flex flex-col">
          <h6 className="font-semibold text-base">Secure Payment</h6>
          <p className="text-sm text-gray-600">We ensure secure payment</p>
        </div>
      </motion.div>

      {/* Feature Item 2 */}
      <motion.div
        className="flex items-center gap-4 w-full sm:w-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image src={discount} alt="Great Discounts" width={50} height={50} />
        <div className="flex flex-col">
          <h6 className="font-semibold text-base">Great Discounts</h6>
          <p className="text-sm text-gray-600">Exclusive offers available</p>
        </div>
      </motion.div>

      {/* Feature Item 3 */}
      <motion.div
        className="flex items-center gap-4 w-full sm:w-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image src={truck} alt="Fast Delivery" width={50} height={50} />
        <div className="flex flex-col">
          <h6 className="font-semibold text-base">Fast Delivery</h6>
          <p className="text-sm text-gray-600">Quick and safe delivery</p>
        </div>
      </motion.div>

      {/* Feature Item 4 */}
      <motion.div
        className="flex items-center gap-4 w-full sm:w-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image src={veritable} alt="Verified Products" width={50} height={50} />
        <div className="flex flex-col">
          <h6 className="font-semibold text-base">Verified Products</h6>
          <p className="text-sm text-gray-600">Genuine quality guaranteed</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Webfeature;
