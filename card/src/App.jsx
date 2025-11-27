import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from "./pages/AdminSignup.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ProductPage from "./pages/ProductPage.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
