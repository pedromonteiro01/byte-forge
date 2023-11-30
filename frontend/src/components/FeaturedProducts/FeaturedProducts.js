import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import FeaturedProductsItem from '../FeaturedProductsItem/FeaturedProductsItem';
import './featuredProducts.css';

const FeaturedProducts = () => {

    const { darkMode } = useDarkMode();
    
    return (
        <div className={`featured-products-wrapper ${darkMode ? 'dark' : ''}`} >
            <FeaturedProductsItem discount={true}/>
            <FeaturedProductsItem />
            <FeaturedProductsItem />
            <FeaturedProductsItem />
        </div>
    )
}

export default FeaturedProducts;