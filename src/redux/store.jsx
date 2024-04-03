//import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from '@redux-devtools/extension';
//import { thunk } from 'redux-thunk';
//import productReducer from './reducers/productReducer';
//import rootReducer from "./reducers"

import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

import { configureStore } from '@reduxjs/toolkit';


// let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


const store =configureStore({
    reducer:{
        auth: authenticateReducer,
        product: productReducer
    }
})
export default store;