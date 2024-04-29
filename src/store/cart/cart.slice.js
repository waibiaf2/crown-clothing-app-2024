import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

const addCartItem = (cartItems, productToAdd) => {
    //check if productToAdd exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    //If exists update its quantity
    if (existingCartItem) {
        return cartItems.map(
            (cartItem) =>
                cartItem.id === productToAdd.id ?
                    {...cartItem, quantity: cartItem.quantity + 1} :
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
                {...cartItem, quantity: cartItem.quantity - 1} :
                cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        setIsCartOpen: (state, action) => {
            state.isCartOpen = action.payload;
        },
        addItemToCart: (state, action) => {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        }
    }
})

export const {
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;