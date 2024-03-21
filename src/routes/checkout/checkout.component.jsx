import './checkout.styles.scss';

import React, {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

const CheckoutComponent = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="checkout-block"> Product </div>
                <div className="checkout-block"> Description </div>
                <div className="checkout-block"> Quantity </div>
                <div className="checkout-block"> Price </div>
                <div className="checkout-block"> Remove </div>
            </div>
            {
                cartItems.map((cartItem) => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">{`Total: ${cartTotal}`}</div>
        </div>
    );
};

export default CheckoutComponent;