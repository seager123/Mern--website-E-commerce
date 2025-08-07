import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product';

/* Create a React context that other components can consume */
export const ShopContext = createContext(null);

/* ---------------------------------------------------------
   Utility: initialize an empty cart
   - For each product ID, set the quantity to 0
---------------------------------------------------------- */
const getDefaultCart = () => {
  const cart = {};
  all_product.forEach((p) => (cart[p.id] = 0));
  return cart;
};

/* ---------------------------------------------------------
   Context Provider Component
   Wrap your App (or parts of it) with this provider so that
   any child component can access cart data and functions.
---------------------------------------------------------- */
const ShopContextProvider = (props) => {
  /* React state to hold cart quantities, initialized to all zeros */
  const [cartItem, setCartItem] = useState(getDefaultCart());

  /* -------- Add one item to cart -------- */
  const addToCart = (itemId) =>
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  /* -------- Remove one item (but not below 0) -------- */
  const removeFromCart = (itemId) =>
    setCartItem((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));

  /* -------- Total number of items (for Navbar badge) -------- */
  const getTotalCartItems = () =>
    Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);

  /* -------- Grand total price -------- */
  const getTotalCartAmount = () => {
    let total = 0;

    // Loop over each product ID in cart
    for (const id in cartItem) {
      const qty = cartItem[id];
      if (qty > 0) {
        // Find product info by ID
        const info = all_product.find((p) => p.id === Number(id));
        if (info) total += info.new_price * qty; // Accumulate price * quantity
      }
    }
    return total;
  };

  /* Values/functions we want to share with all children */
  const contextValue = {
    all_product,         // full product list
    cartItem,            // cart quantities
    addToCart,           // function to add
    removeFromCart,      // function to remove
    getTotalCartItems,   // total items for badge
    getTotalCartAmount,  // grand total price
  };

  /* Wrap children with the provider so they can consume context */
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // Export the provider for use in App.jsx
