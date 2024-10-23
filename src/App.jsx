import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Component/Footer/Footer";
import BannerKids from "./Component/Assets/Banner/BannerKids";
import BannerMen from "./Component/Assets/Banner/BannerMen";
import BannerWomen from "./Component/Assets/Banner/BannerWomen";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<ShopCategory banner={<BannerMen/>}category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={<BannerWomen/>}category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={<BannerKids/>} category="kids" />} />
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return <Shop />;
}

export default App;
