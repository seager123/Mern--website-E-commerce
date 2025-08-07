import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

import Breadcrum        from "../Components/Breadcrum/Breadcrum";
import ProductDisplay   from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox   from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct   from "../Components/RelatedProduct/RelatedProduct";

/* ─────────────────────────────────────────
   Product page component
   - Shows one product, its details, description,
     and related products.
────────────────────────────────────────── */
const Product = () => {
  /* 1. Get the full product list from context */
  const { all_product } = useContext(ShopContext);

  /* 2. Grab the product ID from the URL (/product/:ProductId) */
  const { ProductId } = useParams();        // e.g., "23"

  /* 3. Find the matching product object */
  const product = all_product.find(
    (e) => e.id === Number(ProductId)        // convert param to number
  );

  /* 4. Render page sections */
  return (
    <div>
      {/* Breadcrumb navigation */}
      <Breadcrum product={product} />

      {/* Main product display (images, price, add-to-cart) */}
      <ProductDisplay product={product} />

      {/* Description / reviews box */}
      <DescriptionBox />

      {/* Suggested items */}
      <RelatedProduct />
    </div>
  );
};

export default Product;  // ✅ Default export so <Product /> can be routed