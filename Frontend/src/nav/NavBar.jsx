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
import ThreeDotButton from "./ThreeDotButton";

const NavBar = () => {
  const { isLoggedIn, userType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

        {/* LEFT: Logo */}
        <Link
          to="/"
          className="text-xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg"
        >
          Complete Bazaar
        </Link>

        {/* 🔴 LOGGED OUT → ONLY Login & Signup (Mobile + Desktop) */}
        {!isLoggedIn && (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="flex items-center gap-2 text-base font-semibold text-blue-700 bg-white hover:bg-blue-700 hover:text-white px-4 py-2 rounded-lg shadow"
            >
              <FaSignInAlt />
              Login
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-700 px-4 py-2 rounded-lg shadow-lg"
            >
              <FaUserPlus />
              Signup
            </Link>
          </div>
        )}

        {/* 🟢 LOGGED IN USERS */}
        {isLoggedIn && (
          <>
            {/* CENTER: Search (Customer only, Mobile + Desktop) */}
            {userType === "customer" && (
              <div className="flex-1 mx-3 max-w-xl">
                <SearchBox />
              </div>
            )}

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              {/* SELLER — Add Product (Desktop + Mobile) */}
              {userType === "seller" && (
                <Link
                  to="/add-product"
                  className="flex items-center gap-2 text-base font-semibold text-indigo-600 bg-white/10 hover:bg-white/30 px-4 py-2 rounded-lg shadow"
                >
                  <FaPlus className="text-green-400" />
                  Add Product
                </Link>
              )}

              {/* CUSTOMER — Cart & Orders (Desktop only) */}
              {userType === "customer" && (
                <div className="hidden lg:flex items-center gap-4">
                  <Link
                    to="/cart"
                    className="flex items-center gap-2 text-base font-semibold text-indigo-500 bg-white/10 hover:bg-white/30 px-4 py-2 rounded-lg shadow"
                  >
                    <FaShoppingCart className="text-green-300" />
                    Cart
                  </Link>

                  <Link
                    to="/orders"
                    className="flex items-center gap-2 text-base font-semibold text-indigo-500 bg-white/10 hover:bg-white/30 px-4 py-2 rounded-lg shadow"
                  >
                    <FaClipboardList className="text-blue-200" />
                    Orders
                  </Link>
                </div>
              )}

              {/* LOGOUT (Desktop only) */}
              <button
                onClick={handleLogout}
                className="hidden lg:flex items-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 rounded-lg shadow"
              >
                <FaSignOutAlt />
                Logout
              </button>

              {/* MOBILE — Three Dot (Logged-in only) */}
              <ThreeDotButton
                userType={userType}
                handleLogout={handleLogout}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
