import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessages from "../common/ErrorMessages.jsx";
import {
  fetchCustomerData,
} from "../../store/slices/customerSlice.js";
import CustomerProducts from "./CustomerProducts.jsx";

const CustomerHome = () => {
  const { products, cart, isLoading, errorMessages } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);
  
  if (isLoading) {
    return <p className="text-center mt-4">Loading products...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <ErrorMessages errors={errorMessages} />
      {!products || products.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded shadow-sm mt-6">
          <svg
            className="w-16 h-16 text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 64 64"
          >
            <rect
              x="8"
              y="16"
              width="48"
              height="32"
              rx="6"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M16 48V28a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <p className="text-gray-600 mb-3 text-lg font-medium">
            You haven&apos;t added any products yet.
          </p>
          <p className="text-gray-500 mb-4">
            Start by adding your first product to showcase it here!
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-150">
            + Add Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <CustomerProducts
              key={product.id}
              product={product}
              cart={cart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerHome;
