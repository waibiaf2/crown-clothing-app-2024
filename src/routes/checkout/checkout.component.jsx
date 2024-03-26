import './checkout.styles.scss';

import React, {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

const CheckoutComponent = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <span  className="checkout-block"> Product </span>
                <span  className="checkout-block"> Description </span>
                <span  className="checkout-block"> Quantity </span>
                <span  className="checkout-block"> Price </span>
                <span  className="checkout-block"> Remove </span>
            </div>
            {
                cartItems.map((cartItem) => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">{`Total: ${cartTotal}`}</div>
        </div>
    );
};

export default CheckoutComponent;