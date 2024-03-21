import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
    //check if productToAdd exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    //If exists update its quantity
    if (existingCartItem) {
        return cartItems.map(
            (cartItem) =>
                cartItem.id === productToAdd.id ?
                    {...cartItem, quantity: cartItem.quantity + 1}:
                    cartItem
        );
    }

    //If it doesn't just add it to the cart items array
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total,item) => total += item.quantity + 1,
            0
        )

        setCartCount(newCartCount)
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

