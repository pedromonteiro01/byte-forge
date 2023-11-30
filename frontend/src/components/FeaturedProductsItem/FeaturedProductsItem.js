import template from './template.jpeg';
import './FeaturedProductsItem.css';
import discount from './discount.png';
import './button.scss';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProductsItem = (props) => {

    const { darkMode } = useDarkMode();

    return (
        <div className="featured-products-container">
            {
                props.discount &&
                <div className='discount-wrapper'>
                    <img src={discount} alt='discount item' />
                </div>
            }
            <div className="featured-products-item">
                <div className="featured-products-image-wrapper">
                    <img src={template} alt="template" />
                </div>
                <div className={`featured-products-item-title ${darkMode ? 'dark' : ''}`}>
                    Restaurante Website
                </div>
                <div className={`featured-products-item-button ${darkMode ? 'dark' : ''}`}>
                    <div>
                        <span>Desde </span>
                        {
                            props.discount ?
                                <>
                                    <span style={{ textDecoration: 'line-through' }}>200€</span>
                                    <span style={{ display: 'block', textAlign: 'right' }}>100€</span>
                                </>
                                :
                                <span>200€</span>
                        }
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
    )
}

export default FeaturedProductsItem;