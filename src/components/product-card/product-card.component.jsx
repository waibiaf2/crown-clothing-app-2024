import './product-card.styles.scss';

import React from 'react';

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.slice";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItemToCart(product))
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;