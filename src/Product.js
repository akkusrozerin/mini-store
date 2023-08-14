import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Product = ({product, addToCart, onQuickView}) => {
  const {id, images, name, price, description} = product
  console.log(id, images, name, price, description);
  return (
    <div className="product-card">
      <img src={images[0]} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <button onClick={onQuickView}> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/> Quick View
      </button>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
export default Product;
