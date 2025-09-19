import { CreditCard, User, Mail, Phone, Lock, Banknote } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "../hooks/useCurrency";
import toast from "react-hot-toast";

export const PaymentForm = ({ cartItems, total }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paystack"); // default Paystack

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (paymentMethod === "paystack") {
      if (!validateForm()) return;
      setIsLoading(true);

      try {
        const response = await fetch("/api/payments/initialize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            amount: total,
            metadata: {
              name: formData.name,
              phone: formData.phone,
              cartItems,
            },
          }),
        });

        const data = await response.json();

        if (data.success) {
          window.location.href = data.data.authorization_url;
        } else {
          toast.error("Payment initialization failed!");
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Payment error:", err);
        toast.error("Something went wrong.");
        setIsLoading(false);
      }
    } else if (paymentMethod === "bank") {
      toast.success(
        "Bank transfer selected. Please transfer to the details below."
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <CreditCard className="w-6 h-6 text-red-500 mr-3" />
        <h2 className="text-2xl font-bold text-black">Payment Details</h2>
      </div>

      {/* Payment Method Selector */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
        <button
          type="button"
          className={`flex items-center justify-center px-4 py-2 rounded-lg border ${
            paymentMethod === "paystack"
              ? "bg-red-500 text-white border-red-500"
              : "border-gray-300 text-gray-600"
          }`}
          onClick={() => setPaymentMethod("paystack")}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Pay with Paystack
        </button>
        <button
          type="button"
          className={`flex items-center justify-center px-4 py-2 rounded-lg border ${
            paymentMethod === "bank"
              ? "bg-red-500 text-white border-red-500"
              : "border-gray-300 text-gray-600"
          }`}
          onClick={() => setPaymentMethod("bank")}
        >
          <Banknote className="w-5 h-5 mr-2" />
          Bank Transfer
        </button>
      </div>

      <div className="space-y-6">
        {/* Only show form fields if Paystack is selected */}
        {paymentMethod === "paystack" && (
          <>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </>
        )}

        {/* Bank Transfer Info (only if selected) */}
        {paymentMethod === "bank" && (
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="font-semibold text-black mb-2">
              Bank Transfer Details
            </p>
            <p className="text-gray-700">
              Bank:{" "}
              <span className="font-medium">Providus Bank (Traction)</span>
            </p>
            <p className="text-gray-700">
              Account Number: <span className="font-medium">9986823018</span>
            </p>
            <p className="text-gray-700">
              Account Name:{" "}
              <span className="font-medium">Sisi Caro Media Ltd</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              After making payment, kindly send proof of transfer to our support
              team.
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
          <Lock className="w-5 h-5 text-gray-400 mt-0.5" />
          <div className="text-sm text-gray-600">
            <p className="font-medium text-black">Secure Payment</p>
            <p>
              {paymentMethod === "paystack"
                ? "Your payment information is encrypted and secure with Paystack."
                : "Bank transfer payments are verified manually after proof of payment is received."}
            </p>
          </div>
        </div>

        {/* Pay Button */}
        <button
          type="button"
          onClick={handlePayment}
          disabled={isLoading || cartItems.length === 0}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
            isLoading || cartItems.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 active:scale-98"
          } text-white shadow-lg hover:shadow-xl`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
              Processing...
            </div>
          ) : cartItems.length === 0 ? (
            "Add items to cart first"
          ) : paymentMethod === "paystack" ? (
            <>Pay {formatCurrency(total)} with Paystack</>
          ) : (
            <>Confirm Bank Transfer ({formatCurrency(total)})</>
          )}
        </button>
      </div>
    </div>
  );
};
