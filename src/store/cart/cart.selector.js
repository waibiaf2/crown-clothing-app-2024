import {createSelector} from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
);

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    cartSlice => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((total, cartItem) => total * cartItem.quantity, 0)
);
