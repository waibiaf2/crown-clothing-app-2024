import React from 'react';

import './cart-dropdown.styles.scss';

import Button from "../button/button.component";


const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container" >
            <div className="empty-message"></div>
            <div className="cart-items">

            </div>

            <Button>Add To Cart</Button>
        </div>
    );
};

export default CartDropdown;