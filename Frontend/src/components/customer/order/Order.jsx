const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Order = ({ order, products }) => {
  const productsInOrder = order.products.map((productId) => {
    return products.find((p) => p._id === productId);
  });

  let orderCreatedAt = "";
  if (order.createdAt) {
    const dateObj = new Date(order.createdAt);
    orderCreatedAt = isNaN(dateObj.getTime()) ? "" : dateObj.toLocaleString();
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-xl shadow-xl p-6 m-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-200">
      <div className="mb-4 flex justify-between items-center">
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
          <svg
            className="w-3 h-3 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {orderCreatedAt && <span>{orderCreatedAt}</span>}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${
            order.status === "Delivered"
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-green-50 text-green-700 border-green-200"
          }`}
        >
          {order.status || "Success"}
        </span>
      </div>
      <div className="divide-y divide-gray-100 mb-4">
        {productsInOrder.map((product, idx) =>
          product ? (
            <div
              key={product._id}
              className="flex items-center py-3 gap-4 hover:bg-gray-50 rounded transition-colors"
            >
              <div className="relative">
                <img
                  src={`${BASE_URL}/${product.imageUrl}`}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-lg shadow border border-gray-200"
                  style={{ minWidth: "3.5rem", minHeight: "3.5rem" }}
                />
                {product.isFeatured && (
                  <span className="absolute top-1 left-1 bg-yellow-200 text-yellow-800 text-[0.6rem] px-1 rounded font-semibold">
                    ★
                  </span>
                )}
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-semibold text-base text-gray-800">
                  {product.name}
                </span>
                <span className="text-xs text-gray-500 italic">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>
            </div>
          ) : (
            <div
              key={idx}
              className="py-2 text-xs text-gray-400 italic flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              Product not found
            </div>
          )
        )}
      </div>
      <div className="flex justify-between items-center border-t pt-4 text-lg mt-4">
        <span className="font-semibold text-gray-700 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3z" />
            <path d="M21 12c0-4.418-4.03-8-9-8s-9 3.582-9 8c0 4.418 4.03 8 9 8s9-3.582 9-8z" />
          </svg>
          Total
        </span>
        <span className="font-bold text-green-600 tracking-wide text-xl drop-shadow-sm">
          ${Number(order.totalAmount).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Order;
