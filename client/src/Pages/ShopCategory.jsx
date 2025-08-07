import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/item/item';
import './ShopCategory.css';

const ShopCategory = ({ category, banner }) => {
  const { categoryName } = useParams();
  const { all_product } = useContext(ShopContext);

  // 🟡 Use prop category OR fallback to URL param
  const currentCategory = category || categoryName;

  // 🔍 Filter products
  const filteredProducts = all_product.filter(
    (item) => item.category.toLowerCase() === currentCategory.toLowerCase()
  );

  // ✅ Banner Images (Static)
  const bannerImages = {
    womens: require("../Assets/banner_women.jpg"),
    mens: require("../Assets/banner_men.png"),
    kids: require("../Assets/banner_kids.jpg")
  };

  return (
    <div className="shop-category">
      {/* 🧪 Static banners based on category */}
      {bannerImages[currentCategory.toLowerCase()] && (
        <img
          src={bannerImages[currentCategory.toLowerCase()]}
          alt={`${currentCategory} Banner`}
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "16px",
            border: "2px solid #ccc",
            borderRadius: "8px"
          }}
        />
      )}

      {/* ✅ Dynamic Banner via props (optional override) */}
      {banner && (
        <img className="shop-banner" src={banner} alt={`${currentCategory} banner`} />
      )}

      {/* 🔠 Heading */}
      <h2 className="category-title">{currentCategory.toUpperCase()} Collection</h2>

      {/* 🛍️ Products */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
                rating={product.rating} // ✅ Pass karo
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
