import './cart-item.styles';

import React from 'react';
import {CartItemContainer, Image, ItemDetails, Name} from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name, price, imageUrl, quantity} = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span>{`${quantity} x $${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;