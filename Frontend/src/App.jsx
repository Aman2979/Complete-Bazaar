import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/seller/AddProduct.jsx";
import NavBar from "./nav/NavBar";
import Signup from "./components/auth/Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
