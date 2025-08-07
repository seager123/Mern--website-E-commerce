import React from "react";
import "./BestSeller.css"; // CSS if needed
import all_product from '../../Assets/all_product'; // correct path check kar lena
import Item from "../item/item"; // jahan aapka Item.jsx hai

const BestSeller = () => {
  // Filter best seller products
  const bestSellerItems = all_product.filter(item => item.tag === "bestseller");

  return (
    <div className="best-seller-section">
      <h2>Exclusive Offer For You</h2>
      <p>ONLY ON BEST SELLERS PRODUCT</p>

      <div className="best-seller-items">
        {bestSellerItems.map(product => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
            rating={product.rating}
             badge="Best Seller"       // ✅ badge text
            showBadge={true}       // ✅ condition to show
 
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
