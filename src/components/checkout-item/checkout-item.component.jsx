import './checkout-item.styles.scss';

import React, {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";

const CheckoutItemComponent = ({cartItem}) => {
    const {name, price, quantity,imageUrl} =cartItem;
    const {removeItemFromCart, addItemToCart, clearItemFromCart} = useContext(CartContext);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

    const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={removeItemFromCartHandler}>&#60;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={addItemToCartHandler}>&#62;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemFromCartHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItemComponent;