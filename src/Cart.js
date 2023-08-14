// Cart.js

import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
