import { BadgeX } from "lucide-react";
import Image from "next/image";
import React from "react";
import product2 from "../../Images/DowloadImage/KabuliChana.png";

const Page = () => {
  const products = [
    {
      name: "Great Value Rising Crust Frozen Pizza, Supreme",
      newprice: "₹699",
      oldprice: "₹999",
      date: "May 2, 2025",
      stock: "In Stock",
      image: product2,
    },
    {
      name: "California Pizza Kitchen Margherita, Crispy Thin Crust Pizza, 15.5 oz (Frozen)",
      newprice: "₹699",
      oldprice: "₹999",
      date: "May 2, 2025",
      stock: "In Stock",
      image: product2,
    },
    {
      name: "Simply Orange Pulp Free Juice – 52 fl oz",
      newprice: "₹699",
      oldprice: "₹999",
      date: "May 2, 2025",
      stock: "Sold Out",
      image: product2,
    },
    {
      name: "100 Percent Apple Juice – 64 fl oz Bottle",
      newprice: "₹699",
      oldprice: "₹999",
      date: "May 1, 2025",
      stock: "In Stock",
      image: product2,
    },
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <table className="min-w-full table-auto border-separate border-spacing-y-0">
        {/* Thead with underline */}
        <thead>
          <tr className="text-left text-m text-black font-bold">
            <th className="py-3">Image</th>
            <th className="py-3">Product</th>
            <th className="hidden md:table-cell py-3">Price</th>
            <th className="hidden md:table-cell py-3">Date Added</th>
            <th className="hidden md:table-cell py-3">Stock</th>
            <th className="py-3">Add to cart</th>
          </tr>
        </thead>
        {/* Body with bottom borders on each row */}
        <tbody>
          {products.map((p, idx) => (
            <tr key={idx} className=" hover:bg-gray-100 transition shadow-xs">
              {/* Image */}
              <td className="py-4 pr-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="rounded-md object-contain"
                />
              </td>

              {/* Product Name */}
              <td className="text-sm font-medium text-gray-800  md:max-w-s md:pr-4">
                {p.name}
              </td>

              {/* Price */}
              <td className="hidden md:table-cell text-sm pr-4">
                <span className="text-gray-800 font-semibold">
                  {p.newprice}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  {p.oldprice}
                </span>
              </td>

              {/* Date */}
              <td className="hidden md:table-cell text-sm text-gray-600 pr-4">
                {p.date}
              </td>

              {/* Stock */}
              <td className="hidden md:table-cell text-sm pr-4">
                <span
                  className={`font-medium ${
                    p.stock === "In Stock" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {p.stock}
                </span>
              </td>

              {/* Actions */}
              <td className="py-4 px-2">
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    className="py-1 md:py-2 px-1 md:px-4 text-white text-sm md:font-medium w-full rounded"
                    style={{ backgroundColor: "var(--purple)" }}
                  >
                    Add to cart
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <BadgeX size={22} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
