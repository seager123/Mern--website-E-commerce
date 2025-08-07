import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from '../../Assets/logo.jpg';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate import
import { ShopContext } from "../../Context/ShopContext";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery.trim()}`); // ✅ navigate to SearchResults
    }
  };

  return (
    <div className="navbar">
      {/* ── Logo ── */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* ── Menu ── */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>Shop</Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link to="/category/mens" style={{ textDecoration: "none" }}>Men</Link>
          {menu === "Mens" && <hr />}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link to="/category/womens" style={{ textDecoration: "none" }}>Womens</Link>
          {menu === "Womens" && <hr />}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="/category/kids" style={{ textDecoration: "none" }}>Kids</Link>
          {menu === "Kids" && <hr />}
        </li>
        <li onClick={() => setMenu("Latest")}>
          <Link to="/latest-collection" style={{ textDecoration: "none" }}>Latest</Link>
          {menu === "Latest" && <hr />}
        </li>
      </ul>

      {/* ── Search ── */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // 🔁 Enter key support
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* ── Login & Cart ── */}
      <div className="nav-login-cart">
       
    <Link to="/adminauth">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon style={{ fontSize: 30, color: "#333", cursor: "pointer" }} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
