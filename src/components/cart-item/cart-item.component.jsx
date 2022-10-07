import { CartItemContainer, ItemDetails, CartItemName } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;    
    return (
        <CartItemContainer>
            <img src={`${imageUrl}`} alt={`${name}`} />
            <ItemDetails>
                <CartItemName>{name}</CartItemName>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;