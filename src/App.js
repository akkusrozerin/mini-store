import React, {useState} from 'react';
import ProductList from './ProductList'; // Adjust the import path as needed
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import CartPage from './CartPage';

const products = [
  {
    id: 1,
    images:['/assets/product1.jpeg', '/assets/product1_2.jpeg'],
    name: 'Product A',
    price: 19.99,
    description: 'A wonderful product...',
  },
  // Add more products
];

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (item) => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedItems.filter(cartItem => cartItem.quantity > 0));
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };


  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="header-left">
            <h1>MINI STORE</h1>
          </div>
          <div className="header-right">
            <Link to="/cart" className="cart-icon">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="2x" />
              <span className="cart-item-count">{cartItems.length}</span>
            </Link>
          </div>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 Your Mini Store. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
