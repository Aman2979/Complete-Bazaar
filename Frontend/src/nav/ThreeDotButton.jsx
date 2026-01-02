import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaEllipsisV,
  FaShoppingCart,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

const ThreeDotButton = ({ userType, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative lg:hidden" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 text-white text-xl rounded-full hover:bg-white/20 transition"
        aria-label="More options"
      >
        <FaEllipsisV />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl z-50 overflow-hidden">

          {/* CUSTOMER OPTIONS */}
          {userType === "customer" && (
            <>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaShoppingCart className="text-green-500" />
                Cart
              </Link>

              <Link
                to="/orders"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaClipboardList className="text-blue-500" />
                Orders
              </Link>
            </>
          )}

          {/* LOGOUT */}
          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreeDotButton;
