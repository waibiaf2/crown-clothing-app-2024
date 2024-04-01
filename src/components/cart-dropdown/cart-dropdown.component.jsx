import React, {useContext} from 'react';

import {CartDropDownContainer, CartItems, Button, EmptyMessage} from './cart-dropdown.styles';

import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";


const CartDropdown = () => {
    const navigation =  useNavigate()
    const {cartItems} = useContext(CartContext);
    return (
        <CartDropDownContainer>
            {
                cartItems.length ? (
                    <CartItems>
                        {
                            cartItems.map(
                                cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>
                            )
                        }
                    </CartItems>
                ) :(
                    <EmptyMessage>There are no cart items added!</EmptyMessage>
                )
            }

            <Button onClick={() => navigation('/checkout')}>Go to Checkout</Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;