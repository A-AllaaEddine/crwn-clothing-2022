import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();
    
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        toggleIsCartOpen();
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />))
                    ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
                </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>

    )
}

export default CartDropdown;