import { ProductCardContainer, Footer, ProductImage } from './product-card.styles';

import Button, { BUTTON_TYPES_CLASSES} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <ProductImage src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <Button 
                buttonType={BUTTON_TYPES_CLASSES.inverted} 
                onClick={addProductToCart} >Add to card
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard;