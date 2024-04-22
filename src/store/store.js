import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {rootReducer} from "./root-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middleWares = [
    process.env.NODE_ENV === 'development' && logger
].filter(Boolean);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleWares),
});

export const persistor = persistStore(store);
