import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Beranda";
import About from "./components/About";
import Skill from "./components/Skill";


import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Weather from "./pages/Weather";
import FavProvider from "./context/FavContext";
import More from "./components/More";


import ProductDetail from "./pages/shop/ProductDetail";
import ShopLayout from "./pages/shop/ShopLayout";
import ShopList from "./pages/shop/ShopList";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya jalan sekali
    });
  }, []);

  return (
    <AuthProvider>
      <FavProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/more" element={<More />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/weather"
                element={
                  <ProtectedRoute>
                    <Weather />
                  </ProtectedRoute>
                }
              />

              <Route path="/shop" element={<ShopLayout />}>
                <Route index element={<ShopList />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </FavProvider>
    </AuthProvider>
  );

}