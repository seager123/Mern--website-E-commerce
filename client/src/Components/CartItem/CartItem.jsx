import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import cross_icon from '../../Assets/cart_cross_icon.png';
import remove_icon from '../../Assets/cart_cross_icon.png';

const CartItem = () => {
  const {getTotalCartAmount ,all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="CartItem">
      {/* header row */}
      <div className="cartItem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* cart rows */}
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <React.Fragment key={e.id}>
              <div className="cartItem-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItem-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                  className="cartItem-remove-icon"
                />
              </div>
              <hr />
            </React.Fragment>
          );
        }
        return null;
      })}

      {/* totals + promo-code area (unchanged) */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h3>Cart Totals</h3>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount ()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount ()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
