import { configureStore } from "@reduxjs/toolkit";
// this is instead of createStore from redux
import { combineReducers } from 'redux';
import categoriesSlice from "./categories.js";
import productSlice from './products.js';
import cartSlice from "./cart.js";

const reducers = combineReducers({
  category: categoriesSlice.reducer,
  products: productSlice.reducer,
  cart: cartSlice.reducer,
})

const store = configureStore({ reducer: reducers });

export default store;