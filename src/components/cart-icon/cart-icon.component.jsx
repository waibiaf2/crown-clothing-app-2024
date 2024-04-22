import React from 'react';

import './cart-icon.styles';
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartIsOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.slice";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;