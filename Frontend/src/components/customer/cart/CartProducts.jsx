import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/slices/customerSlice";

const CartProducts = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="bg-white flex items-center gap-4 rounded-xl shadow border border-gray-200 hover:shadow-md transition p-4">
      <img
        src={"http://localhost:3000/" + product.imageUrl}
        alt={product.name}
        className="w-20 h-20 object-contain rounded-lg bg-gray-50 flex-shrink-0"
      />
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold text-gray-800 truncate">
            {product.name}
          </h2>
        </div>
        <div className="flex items-center gap-3 mt-1">
          {product.brand && (
            <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
              {product.brand}
            </span>
          )}
          {product.category && (
            <span className="text-xs text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
              {product.category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-sm font-medium text-gray-700">
            {" "}
            ₹{product.price}
          </span>
        </div>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 transition text-white px-3 py-2 rounded-lg font-semibold flex items-center gap-2"
        type="button"
        onClick={() => handleRemoveFromCart(product._id)}
      >
        <FaShoppingCart />
        Remove
      </button>
    </div>
  );
};

export default CartProducts;
