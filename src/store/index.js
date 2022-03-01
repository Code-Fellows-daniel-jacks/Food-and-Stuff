import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categories.js';

const reducers = combineReducers({
  category: categoryReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store;