import React from "react";

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
    <div className="bg-white rounded-lg shadow-md p-4 m-3 border border-gray-100">
      <div className="mb-4 flex justify-between items-center">
        {orderCreatedAt && (
          <span className="text-xs text-gray-400">{orderCreatedAt}</span>
        )}
      </div>
      <div className="divide-y divide-gray-100 mb-4">
        {productsInOrder.map((product, idx) =>
          product ? (
            <div key={product._id} className="flex items-center py-2 gap-3">
              <img
                src={"http://localhost:3000/" + product.imageUrl}
                alt={product.name}
                className="w-10 h-10 object-cover rounded shadow-sm border"
                style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
              />
              <div className="flex flex-col flex-grow">
                <span className="font-medium text-sm">{product.name}</span>
                <span className="text-xs text-gray-500">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>
            </div>
          ) : (
            <div key={idx} className="py-2 text-xs text-gray-400">
              Product not found
            </div>
          )
        )}
      </div>
      <div className="flex justify-between items-center border-t pt-2 text-sm">
        <span className="font-medium text-gray-700">Total:</span>
        <span className="font-bold text-green-700">
          ${Number(order.totalAmount).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Order;
