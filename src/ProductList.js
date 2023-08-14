import React, { useState } from 'react';
import Product from './Product';
import Modal from './Modal'; // Adjust the import path as needed
import './ProductList.css';

const ProductList = ({ products, addToCart}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  console.log(products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          onQuickView={() => handleQuickView(product)}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductList;
