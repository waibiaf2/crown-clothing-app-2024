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
            <div className="name">{name}</div>
            <div className="quantity">
                <span className="arrow" onClick={removeItemFromCartHandler}>&lt;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={addItemToCartHandler}>&gt;</span>
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={clearItemFromCartHandler}>&times;</div>
        </div>
    );
};

export default CheckoutItemComponent;