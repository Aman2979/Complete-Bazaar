import { FaCheckCircle } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../../store/slices/customerSlice";

const Success = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  const hasPlacedOrder = useRef(false);

  useEffect(() => {
    if (!sessionId || hasPlacedOrder.current) return;

    hasPlacedOrder.current = true;
    dispatch(placeOrder({ sessionId }));
  }, [dispatch, sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle size={70} className="text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            to="/orders"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            View Orders
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

export default Success;
