import React from "react";
import CartItem from "../Components/CartItem/CartItem"; // Reusable cart item list

/* ─────────────────────────────────────────
   Cart page component
   - Simply renders the <CartItem /> list
────────────────────────────────────────── */
const Cart = () => {
  return (
    /* Wrap with a <div> in case you add headers or totals later */
    <div>
      {/* Displays all items currently in the cart */}
      <CartItem />
    </div>
  );
};

export default Cart; // Export so <Cart /> can be routed and displayed
