import template from './template.jpeg';
import './FeaturedProductsItem.css';
import discount from './discount.png';
import './button.scss';
import { FaArrowRight } from 'react-icons/fa';


const FeaturedProductsItem = (props) => {
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
                <div className="featured-products-item-title">
                    Restaurante Website
                </div>
                <div className="featured-products-item-button">
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
                    <button class="kave-btn">
                        <span class="kave-line"></span>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap:'0.3rem'}}>
                        Ver Mais <FaArrowRight />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductsItem;