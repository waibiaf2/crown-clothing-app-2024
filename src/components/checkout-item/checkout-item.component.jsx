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
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.reducer";

const CheckoutItemComponent = ({cartItem}) => {
    const {name, price, quantity,imageUrl} =cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemToCartHandler = () => {
        dispatch(addItemToCart(cartItem));
    }

    const removeItemFromCartHandler = () => {
        dispatch(removeItemFromCart(cartItem))
    };

    const clearItemFromCartHandler = () =>{
        dispatch(clearItemFromCart(cartItem));
    }

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