import './checkout.styles';

import React from 'react';
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {CheckoutBlock, CheckoutContainer, CheckoutHeader, Total} from "./checkout.styles";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock className="checkout-block"> Product </CheckoutBlock>
                <CheckoutBlock className="checkout-block"> Description </CheckoutBlock>
                <CheckoutBlock className="checkout-block"> Quantity </CheckoutBlock>
                <CheckoutBlock className="checkout-block"> Price </CheckoutBlock>
                <CheckoutBlock className="checkout-block"> Remove </CheckoutBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>)
            }
            <Total>{`Total: ${cartTotal}`}</Total>
        </CheckoutContainer>
    );
};

export default CheckoutComponent;