import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';

const reducers = combineReducers({
  category: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store;