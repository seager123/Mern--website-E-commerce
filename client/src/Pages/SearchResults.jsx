// src/Pages/SearchResults.jsx
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/item/item";
import "./SearchResults.css"; // optional CSS

const SearchResults = () => {
  const { all_product } = useContext(ShopContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const matchedProducts = all_product.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for: "{query}"</h2>
      <div className="product-grid">
        {matchedProducts.length > 0 ? (
          matchedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
