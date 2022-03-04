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

const API_URL = 'http://localhost:3001/api/v1/product';

const initialState = {
  allProducts: [],
  filteredProducts: [],

  // new Product('food', 'Ramen', 'quick and easy lunch', .89, 500),
  // new Product('stuff', 'Dead Crow', 'keeps good company', 3.00, 100),

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
      return { ...state, allProducts: payload }
    case 'UPDATE_PRODUCTS':
      console.log(payload[0]);
      let updArr = state.allProducts.map(item => {
        if (item.name === payload[0].name) {
          return payload[0]
        } else {
          return item
        };
      });
      return { ...state, allProducts: updArr }
    case 'DELETE_PRODUCTS':
      console.log(payload);
      return { ...state, apiProducts: payload }
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  const response = await axios({
    method: 'get',
    url: API_URL,
  });
  const data = response.data;
  dispatch({
    type: 'GET_PRODUCTS',
    payload: data,
  });
}

export const updateProducts = (product, value) => async (dispatch, getState) => {
  product.inventory += value;
  const response = await axios({
    method: 'put',
    url: `${API_URL}/${product.id}`,
    data: { ...product },
  });
  const data = response.data;
  dispatch({
    type: 'UPDATE_PRODUCTS',
    payload: [data, value],
  });
}

export const deleteProducts = () => async (dispatch, getState) => {
  const response = await axios.get(API_URL);
  const data = response.data;
  dispatch({
    type: 'GET_PRODUCTS',
    payload: data,
  });
}

export default productReducer;