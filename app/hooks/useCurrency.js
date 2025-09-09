export const formatCurrency = (amount) => {
  if (typeof amount !== "number") return "₦0";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0, // remove decimal .00
  }).format(amount);
};
