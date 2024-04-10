/*
import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}
const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [{
        isCartOpen,
        cartCount,
        cartTotal,
        cartItems
    }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartReducerHandler = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, item) => total += item.quantity, 0
        )

        const newCartTotal = newCartItems.reduce(
            (total, item) => total += item.quantity * item.price, 0
        )

        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS,
                {
                    cartItems: newCartItems,
                    cartTotal: newCartTotal,
                    cartCount: newCartCount
                }
            )
        );
    }

    const addItemToCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd))
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartReducerHandler(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartReducerHandler(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        // setCartItems(clearCartItem(cartItems, cartItemToClear));
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartReducerHandler(newCartItems);
    }

    const setIsCartOpen = () => {
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen)
        );
    }

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

*/
