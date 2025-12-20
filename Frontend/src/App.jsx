import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./nav/NavBar";
import CustomerHome from "./components/customer/CustomerHome.jsx";
import SellerHome from "./components/seller/SellerHome.jsx";
import AddProduct from "./components/seller/AddProduct.jsx";
import Signup from "./components/auth/Signup.jsx";
import Login from "./components/auth/Login.jsx";
import Orders from "./components/customer/Orders.jsx";
import Cart from "./components/customer/cart/Cart.jsx";
import ForgetPassword from "./components/auth/ForgetPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import PublicHome from "./components/public/PublicHome.jsx";

function App() {
  const { userType, token } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              !token ? (
                <PublicHome />
              ) : userType === "seller" ? (
                <SellerHome />
              ) : (
                <CustomerHome />
              )
            }
          />

          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
