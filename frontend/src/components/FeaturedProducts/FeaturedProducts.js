import FeaturedProductsItem from '../FeaturedProductsItem/FeaturedProductsItem';
import './featuredProducts.css';

const FeaturedProducts = () => {
    return (
        <div className="featured-products-wrapper" >
            <FeaturedProductsItem discount={true}/>
            <FeaturedProductsItem />
            <FeaturedProductsItem />
            <FeaturedProductsItem />
        </div>
    )
}

export default FeaturedProducts;