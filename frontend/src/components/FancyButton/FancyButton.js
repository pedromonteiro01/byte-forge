import React from 'react';
import './FancyButton.scss';
import { FaArrowRight } from 'react-icons/fa';


class FancyButton extends React.Component {
    render() {
        // Generate a unique ID for each button to handle multiple instances
        const maskId = `mask_${Math.random().toString(36).substr(2, 9)}`;
        const maskStyle = `#fancy-masked-element_${maskId} { mask: url(#${maskId}); -webkit-mask: url(#${maskId}); }`;

        const buttonStyle = {
            width: this.props.width,
            height: this.props.height
        };

        const fancyFrontStyle = {
            transform: `rotateX(0deg) translateZ(${this.props.height / 2}px)`
        };

        const fancyBackStyle = {
            transform: `rotateX(90deg) translateZ(${this.props.height / 2}px)`
        };

        // SVG attributes
        const textTransform = `matrix(1 0 0 1 ${this.props.width / 2} ${this.props.height / 1.6})`;
        const viewBox = `0 0 ${this.props.width} ${this.props.height}`;

        return (
            <div className="fancy-button" style={buttonStyle}>
                <div className="fancy-flipper">
                    <div className="fancy-front" style={fancyFrontStyle}>
                        <svg height={this.props.height} width={this.props.width} viewBox={viewBox}>
                            <defs>
                                <mask id={maskId}>
                                    <rect width="100%" height="100%" fill="#FFFFFF" />
                                    <text className="mask-text button-text" fill="#000000" transform={textTransform} fontFamily="intro_regular" fontSize={this.props.fontSize} width="100%" textAnchor="middle" letterSpacing="1">
                                        {this.props.buttonText}
                                        <tspan dx="10">
                                            <span className="button-icon">
                                                <FaArrowRight /> {/* React icon used here */}
                                            </span>                                        </tspan>
                                    </text>
                                </mask>
                            </defs>
                            <style>
                                {maskStyle}
                            </style>
                            <rect id={`fancy-masked-element_${maskId}`} fill={this.props.color} width="100%" height="100%" />
                        </svg>
                    </div>
                    <div className="fancy-back" style={fancyBackStyle}>
                        <svg height={this.props.height} width={this.props.width} viewBox={viewBox}>
                            <rect stroke={this.props.color} strokeWidth={this.props.borderWidth} fill="transparent" width="100%" height="100%" />
                            <text className="button-text" transform={textTransform} fill={this.props.color} fontFamily="intro_regular" fontSize={this.props.fontSize} textAnchor="middle" letterSpacing="1">{this.props.buttonText}</text>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

FancyButton.defaultProps = {
    color: '#000',
    width: 110,
    height: 35,
    fontSize: 13,
    borderWidth: 2,
    buttonText: 'Ver Mais',
};

export default FancyButton;
