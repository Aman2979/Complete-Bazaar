import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessages from "../../common/ErrorMessages.jsx";
import { fetchCustomerData } from "../../../store/slices/customerSlice.js";
import CartItems from "./CartItems.jsx";
import CartSummary from "./CartSummary.jsx";

const Cart = () => {
  const { products, cart, isLoading, errorMessages } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  const productsInCart = products.filter((product) =>
    cart.includes(product._id)
  );

  if (isLoading) {
    return <p className="text-center mt-4">Loading products...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My All Cart Products</h1>
      <ErrorMessages errors={errorMessages} />
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="w-full md:w-2/3">
          <CartItems products={productsInCart} />
        </div>
        <div className="w-full md:w-1/3">
          <CartSummary products={productsInCart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
