import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-4">
          <FaTimesCircle size={70} className="text-red-500" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No money was deducted.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            to="/cart"
            className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
          >
            Go Back to Cart
          </Link>

          <Link
            to="/"
            className="border border-gray-300 hover:bg-gray-100 py-2 rounded-lg transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
