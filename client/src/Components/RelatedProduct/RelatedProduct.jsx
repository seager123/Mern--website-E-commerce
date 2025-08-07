import React from "react";
import "./RelatedProduct.css";         // Styles specific to this section
import data_product from '../../Assets/data'; // Array of product data
import Item from "../item/item";       // Reusable Item card component

/* ─────────────────────────────────────────
   RelatedProduct component
   - Displays a header and a grid of related items
────────────────────────────────────────── */
const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
      {/* Section heading */}
      <h1>Related Products</h1>
      <hr />

      {/* Product grid */}
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <Item
            key={i}                 // Unique key for each rendered Item
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct; // Export so it can be used in Product page
