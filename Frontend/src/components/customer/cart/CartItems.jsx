import CartProducts from "./CartProducts";

const CartItems = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded shadow-sm mt-6">
        <p className="text-gray-600 mb-3 text-lg font-medium">
          You haven&apos;t added any products yet.
        </p>
        <p className="text-gray-500 mb-4">
          Start by adding your first product to showcase it here!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <CartProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;