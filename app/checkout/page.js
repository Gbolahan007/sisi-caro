"use client";

import { useEffect, useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentForm } from "./PaymentForm";

const PaymentPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const cartData = localStorage.getItem("cart-storage");
      if (cartData) {
        const parsedData = JSON.parse(cartData);
        setCartItems(parsedData.state?.items || parsedData.items || []);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
      setCartItems([]);
    }
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Complete Your Order
          </h1>
          <p className="text-gray-600">
            Review your items and complete payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OrderSummary cartItems={cartItems} />
          <PaymentForm cartItems={cartItems} total={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
