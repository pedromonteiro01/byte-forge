import React, { useState } from 'react';
import './ColorButton.css';

const ColorButton = ({ colors }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleButtonClick = (index) => {
        setSelectedColorIndex(index);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <>
            {colors.map((color, index) => (
                <button 
                    key={index} 
                    className={`color-button ${selectedColorIndex === index ? 'selected' : ''} ${isAnimating && selectedColorIndex === index ? 'animate' : ''}`}
                    style={{ background: color }}
                    onClick={() => handleButtonClick(index)}
                ></button>
            ))}
        </>
    );
};

export default ColorButton;
