import React, { useContext, useState } from "react";
import "./LatestCollection.css";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../item/item";

const LatestCollection = () => {
  const { all_product } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredProducts = all_product
    .filter((item) => item.isLatest) // ✅ only latest collection
    .filter((item) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category.toLowerCase());
      const typeMatch =
        selectedTypes.length === 0 ||
        selectedTypes.includes(item.type?.toLowerCase());
      return categoryMatch && typeMatch;
    });

  return (
    <div className="latest-collection">
      <div className="filters">
        <h3>Filters</h3>

        <div className="filter-group">
          <h4>Categories</h4>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("mens")}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("womens")}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("kids")}
            />
            Kids
          </label>
        </div>

        <div className="filter-group">
          <h4>Type</h4>
          <label>
            <input
              type="checkbox"
              onChange={() => handleTypeChange("topwear")}
            />
            Topwear
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleTypeChange("bottomwear")}
            />
            Bottomwear
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleTypeChange("winterwear")}
            />
            Winterwear
          </label>
        </div>
      </div>

      <div className="collection-products">
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                  rating={item.rating} // ✅ Add this
                    badge="Latest"       // 👈 Add this fixed badge
                   showBadge={true}     // 👈 Only here
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
