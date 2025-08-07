import "./App.css";

/* ---------- Layout + Navigation ---------- */
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

/* ---------- React Router ---------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------- Pages ---------- */
import Hero from "./Components/Hero/Hero";
import Popular from './Components/Popular/Popular';
import BestSeller from "./Components/BestSeller/BestSeller";



import Offers from "./Components/Offers/Offers"; 
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";



/* ---------- Collection Page ---------- */
import LatestCollection from "./Components/LatestCollection/LatestCollection";
import SearchResults from "./Pages/SearchResults";
import AdminAuth from "./Pages/adminauth"; 

/* ---------- Toast Notifications ---------- */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------- Category banner images ---------- */
import men_banner   from "./Assets/banner_men.png";
import women_banner from "./Assets/banner_women.jpg";
import kid_banner   from "./Assets/banner_kids.jpg";

function App() {
  return (
    <>
      {/* Global Toast for Notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        pauseOnHover={true}
        theme="light"
      />

      {/* Navbar stays at the top on all pages */}
      <Navbar />

      {/* Main Routes */}
      <Routes>

        {/* ✅ Homepage with both Hero and Popular sections */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Popular />
              <Offers />
            </>
          } 
        />

        {/* ShopCategory Routes with props */}
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="Mens" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="Womens" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="Kids" />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryName" element={<ShopCategory />} />
        <Route path="/latest-collection" element={<LatestCollection />} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/adminauth" element={<AdminAuth />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/bestseller" element={<BestSeller />} />


      </Routes>

      {/* Footer stays at the bottom on all pages */}
      <Footer />
    </>
  );
}
export default App;
