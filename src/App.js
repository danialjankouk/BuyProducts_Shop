import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LandPage from "./components/LandPage";
import Footer from "./components/Footer";
import Products from "./components/Products";
import DetailProducts from "./components/DetailProducts";
const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`${theme || `dark w-full mx-auto h-screen`}`}>
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail" element={<DetailProducts />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
