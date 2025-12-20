import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessages from "../common/ErrorMessages.jsx";
import CustomerProducts from "./PublicProducts.jsx";
import { fetchPublicProducts } from "../../store/slices/publicSlice.js";

const PublicHome = () => {
  const { products, errorMessages, isLoading } = useSelector(
    (state) => state.public
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[55vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="text-center text-lg text-gray-700 font-medium">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <ErrorMessages errors={errorMessages} />

      {!products || products.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded shadow-sm mt-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Welcome to Complete Bazaar!
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-2">
            Your one-stop marketplace for all your needs.
          </p>
          <p className="text-gray-500">
            Start exploring our wide selection of products and enjoy seamless
            shopping.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          {products.map((product) => (
            <CustomerProducts key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicHome;
