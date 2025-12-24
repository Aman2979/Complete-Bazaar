import { useDispatch, useSelector } from "react-redux";
import { createCheckoutSession } from "../../../store/slices/customerSlice";
import { useEffect } from "react";

const CartSummary = ({ products }) => {
  const dispatch = useDispatch();
  const { checkoutUrl, isLoading } = useSelector((state) => state.customer);

  if (!products || products.length === 0) return null;

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const tax = +(totalPrice * 0.18).toFixed(2);
  const shipping = totalPrice > 500 ? 0 : 100;
  const grandTotal = +(totalPrice + tax + shipping).toFixed(2);

  const handleOrder = () => {
    const checkoutProducts = products.map((item) => ({
    productId: item._id,
    quantity: item.quantity || 1, // default quantity
  }));
    dispatch(createCheckoutSession(checkoutProducts));
  };

  /* 🔁 Redirect to Stripe */
  useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 sticky top-6">
      <h2 className="text-xl font-bold mb-5 text-gray-800">Cart Summary</h2>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax (18%)</span>
          <span className="font-medium">₹{tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold">
          <span>Grand Total</span>
          <span className="text-green-600">₹{grandTotal}</span>
        </div>
      </div>

      <button
        type="button"
        disabled={isLoading}
        onClick={handleOrder}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg disabled:opacity-50"
      >
        {isLoading ? "Redirecting..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default CartSummary;
