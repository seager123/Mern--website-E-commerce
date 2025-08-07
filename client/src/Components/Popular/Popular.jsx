import React, { useContext } from "react";
import "./Popular.css";                      // Styles for this section
import data_product from '../../Assets/data';   // Array of popular products
import Item from "../item/item";             // Reusable Item card component
import { ShopContext } from "../../Context/ShopContext";

/* ─────────────────────────────────────────
   Popular component
   - Shows “POPULAR IN WOMEN” heading
   - Maps over data_product to render Item cards
────────────────────────────────────────── */
const Popular = ({ title = "POPULAR IN WOMEN", products = data_product }) => {
  return (
    <div className="popular">
      {/* Section title */}
      <h1 className="popular-title">{title}</h1>
      <hr />

      {/* Product grid */}
      <div className="popular-item">
        {products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={`$${item.new_price}`}
            old_price={`$${item.old_price}`}
             rating={item.rating}  // ⭐ Add this
            
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
