import React, { useContext, useState } from "react";
import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';

import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  // ⭐ Selected size ke liye state
  const [selectedSize, setSelectedSize] = useState("M"); // default "M"

  // ⭐ Price fetch from size-wise object
  const sizePrices = product.price || {}; // if price object exists
  const oldPrice = sizePrices[selectedSize] + 20 || product.old_price;
  const newPrice = sizePrices[selectedSize] || product.new_price;

  return (
    <div className='productdisplay'>

      {/* ==== LEFT IMAGE SECTION ==== */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      {/* ==== RIGHT DETAILS SECTION ==== */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        {/* ⭐ Rating stars */}
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        {/* ⭐ Dynamic Prices based on selected size */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${oldPrice}</div>
          <div className="productdisplay-right-price-new">${newPrice}</div>
        </div>

        {/* Description */}
        <div className="productdisplay-right-description">
          A lightweight, knitted, pullover shirt, close-fitting 
          and with a round neckline and short sleeves, worn as an 
          undershirt or outer garment.
        </div>

        {/* ⭐ SIZE SELECTOR */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={selectedSize === size ? "selected-size" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to cart with selected size */}
        <button
          onClick={() => addToCart(product.id, selectedSize)}
          className="add-to-cart-btn"
        >
          ADD TO CART
        </button>

        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
