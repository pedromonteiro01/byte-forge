import React, { useState } from 'react';
import './ColorButton.css';

const ColorButton = ({ colors }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleButtonClick = (index) => {
        setSelectedColorIndex(index);
        setIsAnimating(true);
        // Reset animation state after it completes
        setTimeout(() => setIsAnimating(false), 300); // Assuming animation duration is 300ms
    };

    return (
        <>
            {colors.map((color, index) => (
                <button 
                    key={index} 
                    className={`color-button ${selectedColorIndex === index ? 'selected' : ''} ${isAnimating && selectedColorIndex === index ? 'animate' : ''}`}
                    style={color.includes('gradient') ? { background: color } : { backgroundColor: color }}
                    onClick={() => handleButtonClick(index)}
                ></button>
            ))}
        </>
    );
};

export default ColorButton;
