import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerData } from "../../store/slices/customerSlice";
import { useEffect } from "react";
import ErrorMessages from "../common/ErrorMessages";
import Order from "./Order";

const Orders = () => {
  const { products, orders, isLoading, errorMessages, token } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[55vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="text-center text-lg text-gray-700 font-medium">Loading products...</p>
      </div>
    );
  }

  // Sort orders by createdAt in descending order (most recent first)
  const sortedOrders = orders
    ? [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My All Orders</h1>
      <ErrorMessages errors={errorMessages} />
      {!sortedOrders || sortedOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded shadow-sm mt-6">
          <p className="text-gray-600 mb-3 text-lg font-medium">
            No orders found
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {" "}
          {/* Vertical, one per row with spacing */}
          {sortedOrders.map((order) => (
            <Order key={order._id} order={order} products={products} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
