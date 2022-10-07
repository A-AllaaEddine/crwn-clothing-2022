import { CheckoutItemContainer, RemoveButton, ImageContainer } from './checkout-item.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    
    const { clearItemFromCart, removeItemToCart, addItemToCart } = useContext(CartContext);

    const clearItemhandle = () => clearItemFromCart(cartItem)
    const addItemhandle = () => addItemToCart(cartItem)
    const removeItemhandle = () => removeItemToCart(cartItem)

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