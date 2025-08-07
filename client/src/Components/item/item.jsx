import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
import StarRating from "../Rating/StarRating";

// 👇 Added 'badge' and 'showBadge' props
const Item = ({ id, name, image, new_price, old_price, rating, badge, showBadge }) => {
  return (
    <div className="item">
      {/* 👇 Show badge only if showBadge is true */}
      {showBadge && badge && (
        <div className="item-badge">{badge}</div>
      )}

      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={image} alt={name} />
      </Link>

      <p>{name}</p>

      <div className="item-prices">
        <div className="item-price-new" style={{ color: "red" }}>${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>

      {/* ⭐ Star Rating */}
      {rating && <StarRating rating={rating} />}
    </div>
  );
};

export default Item;
