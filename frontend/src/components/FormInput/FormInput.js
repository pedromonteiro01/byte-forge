import React from 'react';
import './FormInput.css'; // Make sure to create a corresponding CSS file for styles

const FormInput = ({ label, id, type, placeholder, className }) => {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} className="form-input"/>
    </div>
  );
};

export default FormInput;
