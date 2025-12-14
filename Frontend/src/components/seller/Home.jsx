import React from "react";

// Inline SVGs for the required icons from react-icons/fa

// Star icon (filled)
function FaStar({ className = "", style = {} }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="1em"
      width="1em"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M287.9 17.8L354 150.2 499.2 171.5C522.6 174.6 531.7 202.9 515.7 218.1L413.6 313.9 436.6 457.3C440.1 480.1 416.2 495.8 395 485L288 429.8 181 485C159.8 495.8 135.9 480.1 139.4 457.3L162.4 313.9 60.3 218.1C44.3 202.9 53.4 174.6 76.8 171.5L222 150.2 288.1 17.8C297.1 1.8 318.9 1.8 327.9 17.8Z"></path>
    </svg>
  );
}

// Star icon (outlined)
function FaRegStar({ className = "", style = {} }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="1em"
      width="1em"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M528.1 171.5L382 150.2 316 17.8C309.6 3.6 292.4 3.6 285.1 17.8L219 150.2 47.9 171.5C33.8 173.4 26.2 191.5 36.6 202.7L145.5 313.5 120.6 480.9C118.6 494.2 133.3 504.9 145.9 498L288 431.7 430.1 498C442.7 504.9 457.4 494.2 455.4 480.9L430.5 313.5 539.4 202.7C549.8 191.5 542.2 173.4 528.1 171.5ZM388.6 312.3L410.6 456.6 288 393.6 165.4 456.6 187.4 312.3 81.6 215.2 225.7 197.6 288 70.4 350.3 197.6 494.4 215.2 388.6 312.3Z"></path>
    </svg>
  );
}

// Edit icon (outlined)
function FaRegEdit({ className = "", style = {} }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="1em"
      width="1em"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M402.3 344.9L454.8 292.5L305.7 143.3L253.3 195.8L402.3 344.9ZM564.6 97.4L478.6 11.4C471 3.9 460.8 0 450.7 0C440.6 0 430.4 3.9 422.8 11.4L371 63.1L512.9 205L564.6 153.2C579.3 138.5 579.3 115.1 564.6 97.4ZM362.3 99.6L35.3 426.6C32.8 429.2 31 432.4 31 435.8L31 499C31 505.7 36.3 511 43 511H106.2C109.6 511 112.7 509.2 115.3 506.7L442.3 179.7L362.3 99.6Z"></path>
    </svg>
  );
}

// Trash icon (solid)
function FaTrashAlt({ className = "", style = {} }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M135.2 17.7C140.6 7.1 150.7 0 162.3 0H285.7C297.3 0 307.4 7.1 312.8 17.7L324.3 40H432C440.8 40 448 47.2 448 56C448 64.8 440.8 72 432 72H416.5L397.8 467.7C396.9 490.6 378.5 508 355.6 508H92.4C69.5 508 51.1 490.6 50.2 467.7L31.5 72H16C7.2 72 0 64.8 0 56C0 47.2 7.2 40 16 40H123.7L135.2 17.7zM167.6 48L155.4 73.5C153.4 77.7 149.1 80 144.6 80H79.8L98.5 464H349.5L368.2 80H303.4C298.9 80 294.6 77.7 292.6 73.5L280.4 48H167.6z"></path>
    </svg>
  );
}

const demoProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    brand: "SoundMax",
    description: "High quality wireless headphones with noise cancellation.",
    price: 99.99,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Yoga Mat",
    brand: "EcoYoga",
    description: "Eco-friendly yoga mat, non-slip and comfortable.",
    price: 29.99,
    category: "Sports",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519861153853-232fa7e10ad8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Classic Watch",
    brand: "TimeKeeper",
    description: "Elegant analog classic watch, water-resistant.",
    price: 149.99,
    category: "Accessories",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Fictional Book",
    brand: "Bookster",
    description: "Captivating mystery novel, bestseller of the year.",
    price: 18.5,
    category: "Books",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Office Chair",
    brand: "ComfortSeat",
    description: "Ergonomic office chair, lumbar support and wheels.",
    price: 85.0,
    category: "Furniture",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Stainless Steel Bottle",
    brand: "HydroPure",
    description: "Durable stainless steel water bottle, leak-proof lid.",
    price: 16.2,
    category: "Outdoors",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    brand: "BeatBox",
    description: "Portable Bluetooth speaker, rich bass, 12hr playtime.",
    price: 39.99,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Running Shoes",
    brand: "FlyRunner",
    description: "Lightweight running shoes, breathable, stylish.",
    price: 69.0,
    category: "Shoes",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Kitchen Set",
    brand: "ChefPro",
    description: "Complete kitchen utensil set, stainless steel.",
    price: 55.5,
    category: "Home",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Smartphone Stand",
    brand: "HoldEase",
    description: "Flexible silicone smartphone stand for desk.",
    price: 12.0,
    category: "Accessories",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

// Helper for star rendering
function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-lg" />);
    } else if (rating > i - 1 && rating < i) {
      stars.push(
        <span key={i} className="relative flex items-center">
          <FaStar className="text-yellow-400 text-lg" style={{ clipPath: "inset(0 50% 0 0)" }} />
          <FaRegStar className="text-yellow-200 text-lg absolute left-0" />
        </span>
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-200 text-lg" />);
    }
  }
  return <div className="flex items-center">{stars}</div>;
}

// Rupee symbol as a component for consistency and style (optional)
const Rupee = () => <span className="font-bold">&#8377;</span>;

// Responsive and cleaner UI Footer component
const Footer = () => (
  <footer className="w-full max-w-7xl mx-auto my-10 px-2 sm:px-6">
    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl shadow p-4 sm:p-6 border border-gray-100">
      <div className="flex items-center gap-2 justify-center sm:justify-start">
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.08"/>
          <path d="M10 21.5V10.5C10 9.11929 11.1193 8 12.5 8H19.5C20.8807 8 22 9.11929 22 10.5V21.5C22 22.8807 20.8807 24 19.5 24H12.5C11.1193 24 10 22.8807 10 21.5Z" stroke="#2563EB" strokeWidth="1.5"/>
          <path d="M12 12H20" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-blue-700 font-semibold text-base sm:text-lg">Seller Dashboard</span>
      </div>
      <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
        &copy; {new Date().getFullYear()} <span className="mx-1 text-blue-500 font-semibold">Seller Dashboard</span>
        <span className="hidden sm:inline">· All rights reserved.</span>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:gap-4 gap-2">
        <a
          href="mailto:support@sellerdashboard.com"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-150 text-xs sm:text-sm underline"
        >
          Support
        </a>
        <a
          href="https://github.com/example/seller-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-150 text-xs sm:text-sm underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 sm:gap-0">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">
          <span className="inline-block bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            My Products
          </span>
        </h1>
        <button
          className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-blue-700 active:scale-95 transition-transform duration-150"
        >
          + Add Product
        </button>
      </div>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {demoProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300 relative group border border-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-52 object-cover rounded-t-2xl mb-0"
            />
            <div className="flex flex-col p-4 sm:p-6 flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-bold text-gray-800">{product.name}</h2>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 focus:outline-none"
                    title="Edit"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full text-gray-600 bg-gray-100 hover:bg-red-100 hover:text-red-600 focus:outline-none"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
              <span className="inline-block text-[11px] sm:text-xs px-2 py-1 mr-auto mt-1 rounded bg-gray-200 text-gray-500 font-medium">{product.brand}</span>
              <span className="text-[11px] sm:text-xs text-white bg-blue-500 font-semibold px-2 py-0.5 rounded-lg mb-2 mt-1 w-fit">
                {product.category}
              </span>
              <p className="text-gray-600 mb-2 line-clamp-2 min-h-[2.5em] text-sm">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-lg sm:text-xl font-extrabold text-blue-600"><Rupee />{product.price.toFixed(2)}</span>
                <div className="flex flex-col items-end">
                  <RatingStars rating={product.rating} />
                  <span className="text-xs text-gray-500 font-medium mt-0.5">{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
