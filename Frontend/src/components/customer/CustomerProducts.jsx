import { FaStar, FaShoppingCart } from "react-icons/fa";

const CustomerProducts = ({ product, cart, handleAddToCart }) => {
  const isInCart = cart.includes(product._id);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
      <div
        className="relative flex items-center justify-center bg-gray-50"
        style={{ minHeight: "14rem", maxHeight: "14rem" }}
      >
        <img
          src={"http://localhost:3000/" + product.imageUrl}
          alt={product.name}
          className="max-h-56 max-w-full object-contain mx-auto transition-transform duration-200 group-hover:scale-105"
          style={{ minHeight: "8rem", maxHeight: "14rem", width: "auto" }}
        />
        {product.rating && (
          <div className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full px-2 py-1 flex items-center gap-1 shadow">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">
              {product.rating}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-xl font-bold text-gray-800 truncate">
            {product.name}
          </h2>
          <span className="text-lg font-bold text-green-600">
            ₹{product.price}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          {product.brand && (
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
              {product.brand}
            </span>
          )}
          {product.category && (
            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-0.5 rounded">
              {product.category}
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm flex-1 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto w-full flex gap-2">
          
          <button
            className="w-1/2 bg-green-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-60 transition flex items-center justify-center gap-2"
            type="button"
            onClick={() => handleAddToCart(product._id)}
          >
            <FaShoppingCart className="text-lg" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProducts;
