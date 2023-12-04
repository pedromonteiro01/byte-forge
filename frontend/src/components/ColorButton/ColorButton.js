import React, { useState } from 'react';
import './ColorButton.css';

const ColorButton = ({ colors }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedColorIndex(index);
    };

    return (
        <>
            {colors.map((color, index) => (
                <button 
                    key={index} 
                    className={`color-button ${selectedColorIndex === index ? 'selected' : ''}`} 
                    style={color.includes('gradient') ? { background: color } : { backgroundColor: color }}
                    onClick={() => handleButtonClick(index)}
                ></button>
            ))}
        </>
    );
};

export default ColorButton;
