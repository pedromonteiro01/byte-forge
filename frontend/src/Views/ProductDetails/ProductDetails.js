import React, { useState } from 'react';
import './ProductDetails.css';
import template from './template.jpeg';
import productsData from './data';
import ColorButton from '../../components/ColorButton/ColorButton';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(template);
  const product = productsData[0];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="product-detail">
      <div className='product-detail-wrapper'>
        <div className="hero-image-container">
          <img src={selectedImage} alt="Product" className="hero-image" />
        </div>
        <div className='image-product-details'>
          <h4>{product.title}</h4>
          <hr></hr>
          {product.description.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
          <div className="color-selector">
            <ColorButton colors={product.colors} />
          </div>
          <button className='comprar-button' onClick={scrollToForm}>Pedir Orçamento</button>
        </div>
      </div>
      <div className="image-gallery">
        {[template, template, template].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            onClick={() => handleImageSelect(image)}
            className="gallery-image"
          />
        ))}
      </div>
      <div id="contact-form" className="contact-form">
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Project Description"></textarea>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
