import axios from 'axios';

class Product {
  constructor(category, name, description, price, inventory) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
    this.inventory = inventory;
  }

  setInventory(value) {
    this.inventory += value;
  }
}

const API_URL = 'https://api-js401.herokuapp.com/api/v1/products';

const initialState = {
  allProducts: [
    new Product('food', 'Ramen', 'quick and easy lunch', .89, 500),
    new Product('stuff', 'Dead Crow', 'keeps good company', 3.00, 100),
  ],
  filteredProducts: [],
  apiProducts: [],
}

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, filteredProducts: state.allProducts.filter(item => item.category === payload) }
    case 'ADD_ITEM':
      let decreased = state.allProducts.map(item => {
        if (item.name === payload.name) {
          item.setInventory(-1)
        }
        return item;
      })
      return { ...state, allProducts: decreased }
    case 'REMOVE_ITEM':
      let increased = state.allProducts.map(item => {
        if (item.name === payload[0]) {
          item.setInventory(1)
        }
        return item;
      })
      return { ...state, allProducts: increased }
    case 'GET_PRODUCTS':
      console.log(payload);
      return { ...state, apiProducts: payload }
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  const response = await axios.get(API_URL);
  const data = response.data;
  dispatch({
    type: 'GET_PRODUCTS',
    payload: data,
  });
}

export default productReducer;