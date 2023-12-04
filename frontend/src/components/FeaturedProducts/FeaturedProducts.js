import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import FeaturedProductsItem from '../FeaturedProductsItem/FeaturedProductsItem';
import productsData from './data'; // Import the products data
import './featuredProducts.css';

const FeaturedProducts = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`featured-products-wrapper ${darkMode ? 'dark' : ''}`}>
            {productsData.map(product => (
                <FeaturedProductsItem 
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    colors={product.colors}
                    hasDiscount={product.hasDiscount}
                />
            ))}
        </div>
    )
}

export default FeaturedProducts;
