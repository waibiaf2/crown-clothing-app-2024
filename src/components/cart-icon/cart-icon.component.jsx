import React, {useContext} from 'react';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const {cartCount} =useContext(CartContext)
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;