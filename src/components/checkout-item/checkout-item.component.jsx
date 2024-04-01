import React, {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";
import {
    Arrow,
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Price,
    Quantity,
    RemoveButton,
    Value
} from "./checkout-item.styles";

const CheckoutItemComponent = ({cartItem}) => {
    const {name, price, quantity,imageUrl} =cartItem;
    const {removeItemFromCart, addItemToCart, clearItemFromCart} = useContext(CartContext);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

    const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemFromCartHandler}>&#60;</Arrow>
                <Value>{quantity}</Value>
                <Arrow className="arrow" onClick={addItemToCartHandler}>&#62;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItemComponent;