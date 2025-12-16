import { useDispatch } from "react-redux";
import { placeOrder } from "../../../store/slices/customerSlice";

const CartSummary = ({ products }) => {
  const dispatch = useDispatch();

  if (!products) {
    return null;
  }

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const tax = +(totalPrice * 0.18).toFixed(2);
  const shipping = totalPrice > 500 ? 0 : 100;
  const grandTotal = +(totalPrice + tax + shipping).toFixed(2);

  const handleOrder = () => {
    dispatch(placeOrder());
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 sticky top-6">
      <h2 className="text-xl font-bold mb-5 text-gray-800">Cart Summary</h2>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-800">
            ₹{totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (18%)</span>
          <span className="font-medium text-gray-800">₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-800">
            {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
          </span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span className="text-gray-700">Grand Total</span>
          <span className="text-green-600">₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
      <button
        type="button"
        disabled={products.length === 0}
        className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold text-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-60 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
