import React from "react";
import payment from "../../Images/DowloadImage/payment.png";
import discount from "../../Images/DowloadImage/discount.png";
import truck from "../../Images/DowloadImage/truck.png";
import veritable from "../../Images/DowloadImage/veritable.png";
import Image from "next/image";
const Webfeature = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
  {/* Feature Item 1 */}
  <div className="flex items-center gap-4 w-full sm:w-auto">
    <Image src={payment} alt="Secure Payment" width={50} height={50} />
    <div className="flex flex-col">
      <h6 className="font-semibold text-base">Secure Payment</h6>
      <p className="text-sm text-gray-600">We ensure secure payment</p>
    </div>
  </div>

  {/* Feature Item 2 */}
  <div className="flex items-center gap-4 w-full sm:w-auto">
    <Image src={discount} alt="Great Discounts" width={50} height={50} />
    <div className="flex flex-col">
      <h6 className="font-semibold text-base">Great Discounts</h6>
      <p className="text-sm text-gray-600">Exclusive offers available</p>
    </div>
  </div>

  {/* Feature Item 3 */}
  <div className="flex items-center gap-4 w-full sm:w-auto">
    <Image src={truck} alt="Fast Delivery" width={50} height={50} />
    <div className="flex flex-col">
      <h6 className="font-semibold text-base">Fast Delivery</h6>
      <p className="text-sm text-gray-600">Quick and safe delivery</p>
    </div>
  </div>

  {/* Feature Item 4 */}
  <div className="flex items-center gap-4 w-full sm:w-auto">
    <Image src={veritable} alt="Verified Products" width={50} height={50} />
    <div className="flex flex-col">
      <h6 className="font-semibold text-base">Verified Products</h6>
      <p className="text-sm text-gray-600">Genuine quality guaranteed</p>
    </div>
  </div>
</div>

    </>
  );
};

export default Webfeature;
