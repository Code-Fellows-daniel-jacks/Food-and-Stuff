import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    numberOfItems: 0,
  },
  reducers: {
    updateCart(state, action) {
      if (action.payload.goal === 'add') {
        state.cart.push(action.payload.item);
        state.numberOfItems += 1;
      } else if (action.payload.goal === 'minus') {
        let index = state.cart.indexOf(state.cart.find(item => item.name === action.payload.name));
        state.cart.splice(index, 1);
        state.numberOfItems -= 1;
      }
    }
  }
})

export const { updateCart } = cartSlice.actions;

export default cartSlice;