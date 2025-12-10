import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-700 tracking-tight hover:opacity-80 transition"
          >
            Complete Bazaar
          </Link>
          <div className="flex items-center gap-6 ml-4">
            <Link
              to="/add-product"
              className="text-base font-medium text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Add Product
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-base font-medium text-gray-600 bg-gray-100 hover:bg-blue-50 hover:text-blue-800 px-4 py-2 rounded transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-base font-medium text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded shadow transition-colors duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
