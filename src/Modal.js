import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the Carousel CSS
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const { name, price, description, images } = product;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <h2>{name}</h2>
        {images.length === 1 ? (
          <img src={images[0]} alt={name} className="modal-image" />
        ) : (
          <Carousel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${name} - ${index}`} />
              </div>
            ))}
          </Carousel>
        )}
        <p className="modal-description">{description}</p>
        <p className="modal-price">${price}</p>
      </div>
    </div>
  );
};

export default Modal;
