import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessages from "../common/ErrorMessages.jsx";
import { fetchCustomerData } from "../../store/slices/customerSlice.js";
import CustomerProducts from "./CustomerProducts.jsx";

const CustomerHome = () => {
  const { products, cart, isLoading, errorMessages } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  // Just now
  useEffect(() => {}, [products]);

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
    <>
      <div className="container mx-auto px-4 py-6">
        <ErrorMessages errors={errorMessages} />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          {products.map((product) => (
            <CustomerProducts key={product._id} product={product} cart={cart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
