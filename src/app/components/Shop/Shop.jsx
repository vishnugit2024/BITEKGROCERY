import React from "react";
import ShopBanner from "./ShopBanner";

const Shop = () => {
  return (
    <>
        <ShopBanner />
      <div className="max-w-7xl mx-auto px-4 py-8">
         <div className="flex items-center justify-around py-4 bg-gray-200">
            <div className="text-sm text-gray-500 text-left">
showing 1-12 of 100 results
            </div>
            <div>
               <select className="p-2">
                  <option>Sort by</option>
                  <option>Sort by</option>
                  <option>Sort by</option>
                  <option>Sort by</option>
               </select>    
            </div>
         </div>
      </div>
    </>
  );
};

export default Shop;
