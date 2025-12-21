import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaPlus,
  FaClipboardList,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import SearchBox from "../components/customer/searchBar/SearchBox";

const NavBar = () => {
  const { isLoggedIn, userType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-3xl font-extrabold text-white tracking-tight hover:opacity-90 transition drop-shadow-lg"
          >
            Complete Bazaar
          </Link>

          {/* Attractive options based on user type */}
          {isLoggedIn && userType === "seller" && (
            <div className="flex items-center gap-8 ml-4">
              <Link
                to="/add-product"
                className="flex items-center gap-2 text-base font-semibold text-indigo-600 bg-white bg-opacity-10 hover:bg-opacity-30 px-4 py-2 rounded-lg shadow transition-all duration-200 hover:scale-105"
              >
                <FaPlus className="text-green-400" />
                Add Product
              </Link>
            </div>
          )}
          {isLoggedIn && userType === "customer" && (
            <div className="flex items-center gap-8 ml-4">
              <Link
                to="/cart"
                className="flex items-center gap-2 text-base font-semibold text-indigo-500 bg-white bg-opacity-10 hover:bg-opacity-30 px-4 py-2 rounded-lg shadow transition-all duration-200 hover:scale-105"
              >
                <FaShoppingCart className="text-green-300" />
                Cart
              </Link>
              <Link
                to="/orders"
                className="flex items-center gap-2 text-base font-semibold text-indigo-500 bg-white bg-opacity-10 hover:bg-opacity-30 px-4 py-2 rounded-lg shadow transition-all duration-200 hover:scale-105"
              >
                <FaClipboardList className="text-blue-200" />
                Orders
              </Link>
              <SearchBox />
            </div>
          )}
        </div>
        {!isLoggedIn && (
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="flex items-center gap-2 text-base font-semibold text-blue-700 bg-white hover:bg-blue-700 hover:text-white border border-blue-700 px-4 py-2 rounded-lg transition-all duration-200 shadow hover:scale-105"
            >
              <FaSignInAlt className="text-blue-600" />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              <FaUserPlus className="text-white" />
              Signup
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-700 hover:to-red-700 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="text-white" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
