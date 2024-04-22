import {combineReducers} from 'redux';

import {userReducer} from "./user/user.slice";
import {cartReducer} from "./cart/cart.slice";
import {categoriesReducer} from "./category/category.slice";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});