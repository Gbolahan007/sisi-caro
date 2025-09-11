import { ShoppingBag } from "lucide-react";
import { formatCurrency } from "../hooks/useCurrency";

export const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
      <div className="flex items-center mb-6">
        <ShoppingBag className="w-6 h-6 text-red-500 mr-3" />
        <h2 className="text-2xl font-bold text-black">Order Summary</h2>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={item.id || index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-semibold text-black">
                  {item.title || "Product"}
                </h3>
                <p className="text-gray-600 text-sm">
                  Qty: {item.quantity || 1}
                </p>
              </div>
              <p className="font-bold text-black">
                {formatCurrency((item.price || 0) * (item.quantity || 1))}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-2">
              Add some items to your cart to continue
            </p>
          </div>
        )}
      </div>

      {/* Order Total */}
      {cartItems.length > 0 && (
        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold text-black">
            <span>Total</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
