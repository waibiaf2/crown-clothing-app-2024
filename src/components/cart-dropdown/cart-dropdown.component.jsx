import React from 'react';

import {Button, CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles';
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";


const CartDropdown = () => {
    const navigation =  useNavigate()
    const cartItems = useSelector(selectCartItems);
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