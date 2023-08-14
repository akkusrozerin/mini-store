import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <div className="cart-buttons">
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
