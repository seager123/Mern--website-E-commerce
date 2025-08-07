import React from "react";
import "./Offers.css"; // Styling specific to this section
import exclusive_image from '../../Assets/exclusive_image.png';


import { Link } from "react-router-dom"; // ✅ Import Link for navigation

/* ─────────────────────────────────────────
   Offers component
   - Displays an exclusive sale banner
────────────────────────────────────────── */
const Offers = () => {
  return (
    <div className="offers">
      {/* Left column: text + call-to-action button */}
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>

        {/* ✅ Check Now button wrapped inside Link */}
        <Link to="/bestseller">
          <button>Check Now</button>
        </Link>
      </div>

      {/* Right column: promotional image */}
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers; // Export so <Offers /> can be used in other components
