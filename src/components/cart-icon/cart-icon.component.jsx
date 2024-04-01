import React, {useContext} from 'react';

import './cart-icon.styles';

import {ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from "../../contexts/cart.context";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const {cartCount} =useContext(CartContext)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;