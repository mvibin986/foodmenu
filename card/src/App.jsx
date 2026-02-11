import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/AdminSignup.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import UserLogin from "./upages/UserLogin.jsx";
import UserSignup from "./upages/UserSignup.jsx";
import Product from "./upages/Product.jsx";
import Home from "./Home.jsx";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/ulog" element={<UserLogin />} />
        <Route path="/usign" element={<UserSignup />} />
        <Route path="/uproduct" element={<Product />} />
      </Routes>
      
    </BrowserRouter>
  );
}
