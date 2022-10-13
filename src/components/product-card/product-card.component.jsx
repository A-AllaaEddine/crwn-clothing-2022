import { ProductCardContainer, Footer, ProductImage } from './product-card.styles';

import Button, { BUTTON_TYPES_CLASSES} from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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