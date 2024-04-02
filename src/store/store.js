import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {rootReducer} from "./root-reducer";

const middleWares = [logger];

const composedEhancers = applyMiddleware(...middleWares);

export const store = createStore(rootReducer, undefined, composedEhancers);


