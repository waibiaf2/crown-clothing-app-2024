/*
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import {thunk} from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from "./root-reducer";
import {rootSaga} from "./root-saga";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    sagaMiddleware
].filter(Boolean);

const composeEnhancer = (
        process.env.NODE_ENV === 'development' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
*/

import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";

import {rootReducer} from "./root-reducer";

const middleWares = [
    process.env.NODE_ENV === 'development' && logger
].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleWares),
});
