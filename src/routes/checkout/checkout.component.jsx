import './checkout.styles';

import React, {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {CheckoutBlock, CheckoutContainer, CheckoutHeader, Total} from "./checkout.styles";

const CheckoutComponent = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <CheckoutContainer >
            <CheckoutHeader>
                <CheckoutBlock  className="checkout-block"> Product </CheckoutBlock>
                <CheckoutBlock  className="checkout-block"> Description </CheckoutBlock>
                <CheckoutBlock  className="checkout-block"> Quantity </CheckoutBlock>
                <CheckoutBlock  className="checkout-block"> Price </CheckoutBlock>
                <CheckoutBlock  className="checkout-block"> Remove </CheckoutBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>)
            }
            <Total>{`Total: ${cartTotal}`}</Total>
        </CheckoutContainer>
    );
};

export default CheckoutComponent;