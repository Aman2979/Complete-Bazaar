import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/seller/AddProduct.jsx";
import NavBar from "./nav/NavBar";
import Signup from "./components/auth/Signup.jsx";
import Login from "./components/auth/Login.jsx";
import SellerHome from "./components/seller/SellerHome.jsx";
import { useSelector } from "react-redux";
import CustomerHome from "./components/customer/CustomerHome.jsx";
import Orders from "./components/customer/Orders.jsx";
import Cart from "./components/customer/cart/Cart.jsx";

function App() {
  const { userType } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                userType === "seller" ? <SellerHome /> : <CustomerHome />
              }
            />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
