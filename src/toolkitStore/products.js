import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/product';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    filteredProducts: [],
  },
  reducers: {
    filteredProducts(state, action) {
      state.filteredProducts = state.allProducts.filter(product => {
        console.log(product.category, action.payload);
        return product.category === action.payload;
      });
    },
    makeList(state, action) {
      return { ...state, allProducts: action.payload }
    },
    addToList(state, action) {
      state.allProducts.push(action.payload);
    },
    updateList(state, action) {
      let updArr = state.allProducts.map(item => {
        if (item.name === action.payload.name) {
          return action.payload
        } else {
          return item
        };
      });
      state.allProducts = updArr;
    }
  },
});

export const { makeList, addToList, updateList, filteredProducts } = productsSlice.actions;

export const getProducts = () => async dispatch => {
  const response = await axios({
    method: 'get',
    url: API_URL,
  });
  const data = response.data;
  dispatch(makeList(data));
}

export const createProducts = (formData) => async dispatch => {
  let rqstObj = {
    category: formData.category,
    name: formData.name,
    description: formData.description,
    price: parseInt(formData.price),
    inventory: parseInt(formData.inventory),
  }

  const response = await axios({
    method: 'post',
    url: API_URL,
    data: rqstObj,
  });

  const data = response.data;
  dispatch(addToList(data));
}

export const updateProducts = (updateObj) => async dispatch => {
  const response = await axios({
    method: 'put',
    url: `${API_URL}/${updateObj.id}`,
    data: { inventory: updateObj.value },
  });
  const data = response.data;
  dispatch(updateList(data));
};

export default productsSlice;