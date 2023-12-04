import './FeaturedProductsItem.css';
import discount from './discount.png';
import './button.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import { FaArrowRight } from 'react-icons/fa';
import ColorButton from '../ColorButton/ColorButton';
import template from './template.jpeg';

const FeaturedProductsItem = (props) => {
    const { darkMode } = useDarkMode();
    const { title, price, discountPrice, colors, hasDiscount } = props;

    return (
        <div className="featured-products-container">
            {hasDiscount && (
                <div className='discount-wrapper'>
                    <img src={discount} alt='discount item' />
                </div>
            )}
            <div className="featured-products-item">
                <div className="featured-products-image-wrapper">
                    <img src={template} alt={title} />
                </div>
                <div className={`featured-products-item-title ${darkMode ? 'dark' : ''}`}>
                    {title}
                </div>
                <div className="color-selection">
                    <ColorButton colors={colors} />
                </div>
                <div className={`featured-products-item-button ${darkMode ? 'dark' : ''}`}>
                    <div>
                        <span>Desde </span>
                        {hasDiscount ? (
                            <>
                                <span style={{ textDecoration: 'line-through' }}>{`${price}€`}</span>
                                <span style={{ display: 'block', textAlign: 'right' }}>{`${discountPrice}€`}</span>
                            </>
                        ) : (
                            <span>{`${price}€`}</span>
                        )}
                    </div>
                    <button className={`kave-btn ${darkMode ? 'dark' : ''}`}>
                        <span className={`kave-line ${darkMode ? 'dark' : ''}`}></span>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                            Ver Mais <FaArrowRight />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProductsItem;
