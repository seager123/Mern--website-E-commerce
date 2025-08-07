import React from "react";
import "./FilterSidebar.css"; // ✅ only this is correct

const FilterSidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All", "Mens", "Womens", "Kids"];

  return (
    <div className="filter-sidebar">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((cat, index) => (
          <li
            key={index}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
