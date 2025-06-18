"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Trash2, Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { calculateCartTotals } from "../../lib/cart";
import Image from "next/image";
import product2 from "../../Images/DowloadImage/KabuliChana.png";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockCartItems = [
      {
        id: "1",
        name: "Kabuli Chana",
        price: 249.99,
        quantity: 1,
        image: product2,
      },
      {
        id: "2",
        name: "Kabuli Chana",
        price: 399.99,
        quantity: 1,
        image: product2,
      },
      {
        id: "3",
        name: "Kabuli Chana",
        price: 79.99,
        quantity: 2,
        image: product2,
      },
    ];

    setTimeout(() => {
      setCartItems(mockCartItems);
      setIsLoading(false);
    }, 500);
  }, []);

  const updateQuantity = (id, quantity, name) => {
    if (quantity < 1) {
      removeItem(id, name);
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id, name) => {
    toast.success(`${name} removed from cart`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    const validCoupons = {
      SAVE10: 10,
      SAVE20: 20,
      WELCOME15: 15,
    };

    if (couponCode in validCoupons) {
      setDiscount(validCoupons[couponCode]);
      toast.success(`Coupon ${couponCode} applied successfully`);
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  };

  const {
    subtotal,
    tax,
    discount: discountAmount,
    total,
  } = calculateCartTotals(cartItems, discount);

  if (isLoading) {
    return (
      <div className="mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center h-64">
          <ShoppingBag className="h-12 w-12 text-gray-300 animate-pulse" />
          <h2 className="mt-4 text-xl font-semibold text-gray-600">
            Loading your cart...
          </h2>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center h-64">
          <ShoppingBag className="h-16 w-16 text-gray-300" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-600">
            Your cart is empty
          </h2>
          <p className="mt-2 text-gray-500">
            Add items to your cart to see them here.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded ">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-xl font-bold mb-4">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div
            className="bg-white shadow-lg rounded p-5"
            style={{
              maxHeight: "400px",
              // WebkitOverflowScrolling: 'touch', // Enables momentum scroll on iOS
              overflow: "auto",
            }}
          >
            <div className="flex justify-around items-start text-sm font-semibold text-gray-500 mb-4">
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <div className="space-y-4 pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-4 border-b border-gray-300 pb-4"
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-contain"
                    />
                  </div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-center">₹{item.price.toFixed(2)}</div>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1, item.name)
                      }
                      className="p-2 rounded text-dark bg-gray-200 hover:bg-gray-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      readOnly
                      className="w-10 text-center border border-gray-300 rounded"
                    />

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1, item.name)
                      }
                      className="p-2 rounded text-dark bg-gray-200 hover:bg-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right flex justify-end items-center space-x-2">
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeItem(item.id, item.name)}
                      className="text-red-500 hover:underline"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>

            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{discountAmount.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                applyCoupon(couponCode);
              }}
              className="mt-4 space-y-2"
            >
              <label htmlFor="coupon" className="text-sm font-medium">
                Coupon Code
              </label>
              <input
                type="text"
                id="coupon"
                placeholder="Enter code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full border border-gray-300 focus:outline-purple-600 rounded px-3 py-2"
              />
              <button type="submit" className="w-full purple-btn">
                Apply Coupon
              </button>
            </form>

            <button className="w-full bg-black text-white py-2 rounded text-lg">
              Proceed to Checkout
            </button>

            <div className="text-center text-xs text-gray-500 mt-2">
              <p>🔒 Secure checkout powered by BITECK MART</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
