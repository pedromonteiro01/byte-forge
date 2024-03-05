import React, { useState } from 'react';
import './ProductDetails.css';
import template from './template.jpeg';
import productsData from './data';
import ColorButton from '../../components/ColorButton/ColorButton';
import FormInput from '../../components/FormInput/FormInput';
import ReCAPTCHA from "react-google-recaptcha";
import '@fortawesome/fontawesome-free/css/all.css';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(template);
  const [captchaValue, setCaptchaValue] = useState(null);
  const product = productsData[0];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      // Handle form submission here
    } else {
      // Prompt user to complete the reCAPTCHA
    }
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

      <div className="fancy-section">
        <div className="feature">
          <i className="fas fa-headset fa-3x"></i>
          <h5>Customer Support 24/7</h5>
          <p>Always here to help you with your queries.</p>
        </div>
        <div className="feature">
          <i className="fas fa-lock fa-3x"></i>
          <h5>Security</h5>
          <p>Your security is our top priority.</p>
        </div>
        <div className="feature">
          <i className="fas fa-shipping-fast fa-3x"></i>
          <h5>Fast Delivery</h5>
          <p>Quick and reliable delivery service.</p>
        </div>
      </div>

      <div id="contact-form" className="contact-form">
        <div className="form-row">
          <FormInput
            label="* Nome"
            id="name"
            type="text"
            placeholder="Nome"
            className="half-width"
          />
          <FormInput
            label="* Email"
            id="email"
            type="email"
            placeholder="Email"
            className="half-width"
          />
        </div>
        <div className="input-group full-width">
          <label htmlFor="message">* Descrição do Projeto</label>
          <textarea id="message" placeholder="Mensagem" className="form-textarea"></textarea>
        </div>
        <div className='button-recaptcha'>
          <ReCAPTCHA
            sitekey="6Ld-wTUpAAAAAG16LVBwtid-AUV-4jM9NsUVfMpl"
            onChange={handleCaptchaChange}
          />
          <button type="submit" className="form-button similar-style" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
