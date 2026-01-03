import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const AddProduct = () => {
  const nameRef = useRef();
  const brandRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("brand", brandRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("price", parseFloat(priceRef.current.value));
    formData.append("category", categoryRef.current.value);
    formData.append("rating", parseFloat(ratingRef.current.value));
    formData.append("image", imageRef.current.files[0]);

    const response = await fetch(`${BASE_URL}/api/seller/products`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      navigate("/");
    } else {
      const errorData = await response.json();
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
        Add Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Product Name"
          ref={nameRef}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Product Brand"
          ref={brandRef}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          placeholder="Product Description"
          ref={descriptionRef}
          className="border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          placeholder="Product Price"
          ref={priceRef}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Product Category"
          ref={categoryRef}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Product Rating"
          ref={ratingRef}
          min={0}
          max={5}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label className="block">
          <span className="text-gray-700 font-medium mb-1 block">
            Product Image
          </span>
          <input
            type="file"
            ref={imageRef}
            className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            accept="image/*"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md shadow transition-colors duration-200 mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
