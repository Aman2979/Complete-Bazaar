import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "../../store/slices/sellerSlice.js";
import ErrorMessages from "../common/ErrorMessages.jsx";
import SelllerProducts from "./SelllerProducts.jsx";
import { deleteProduct } from "../../store/slices/sellerSlice.js";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const SellerHome = () => {
  const { products, isLoading, errorMessages } = useSelector(
    (state) => state.seller
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (productId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/api/seller/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(deleteProduct());
    } else {
      const errorData = await response.json();
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[55vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="text-center text-lg text-gray-700 font-medium">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Listed Products</h1>
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
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-150"
            onClick={() => (window.location.href = "/add-product")}
          >
            + Add Product
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          {products.map((product) => (
            <SelllerProducts
              key={product.id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerHome;
