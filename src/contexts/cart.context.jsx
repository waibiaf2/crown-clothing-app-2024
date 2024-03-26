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

const removeCartItem = (cartItems, cartItemToRemove) => {
    //check if productToAdd exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    //If exists update its quantity
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        (cartItem) =>
            cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1}:
                cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total,item) => total += item.quantity + 1, 0
        )

        setCartCount(newCartCount)
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total,item) => total += item.quantity * item.price,0
        )
        setCartTotal(newCartTotal)
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

