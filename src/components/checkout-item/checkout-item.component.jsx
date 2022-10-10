import { CheckoutItemContainer, RemoveButton, ImageContainer } from './checkout-item.styles';

import { addItemToCart, clearItemFromCart, removeItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    
    const cartItems = useSelector(selectCartItems);
    
    const dispatch = useDispatch();

    const clearItemhandle = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItemhandle = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemhandle = () => dispatch(removeItemToCart(cartItems, cartItem))

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={`${imageUrl}`} alt={`${name}`} />
            </ImageContainer>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={removeItemhandle}>
                    &#10094;
                </div>
                <span className='value'>
                    {quantity}
                </span>
                <div className="arrow" onClick={addItemhandle}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <RemoveButton onClick={clearItemhandle}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem;