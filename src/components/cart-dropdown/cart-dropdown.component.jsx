import React, {useContext} from 'react';

import './cart-dropdown.styles.scss';

import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";


const CartDropdown = () => {
    const navigation =  useNavigate()
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart-dropdown-container" >
            {!cartItems.length && <div className="empty-message"></div>}
            <div className="cart-items">
                {
                    cartItems.map(
                        cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>
                    )
                }
            </div>
            <Button onClick={() => navigation('/checkout')}>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;