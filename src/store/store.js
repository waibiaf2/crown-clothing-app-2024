import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "./root-reducer";

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('next state: ', store.getState());
}

const middleWares = [loggerMiddleWare];

const composedEnhancers = applyMiddleware(...middleWares);

export const store = createStore(rootReducer, undefined, composedEnhancers);


