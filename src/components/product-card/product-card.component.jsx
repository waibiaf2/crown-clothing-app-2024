import React from 'react';
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.slice";

import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {
    Image,
    ProductCardContainer,
    Footer,
    Name,
    Price,
    CardButton
} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItemToCart(product))
    }

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <CardButton
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to Cart
            </CardButton>
        </ProductCardContainer>
    );
};

export default ProductCard;