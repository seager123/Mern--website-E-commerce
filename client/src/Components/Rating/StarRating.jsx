import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div style={{ color: "#FFD700", fontSize: "16px" }}>
      {/* 🟡 Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}

      {/* 🌓 Half Star */}
      {hasHalfStar && <span>½</span>}

      {/* ⚪ Empty Stars */}
      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <span key={i}>☆</span>
      ))}

      {/* 🔢 Numeric Rating */}
      <span style={{ marginLeft: "5px", color: "#555" }}>({rating.toFixed(1)})</span>
    </div>
  );
};

export default StarRating;
