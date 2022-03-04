import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: ['all', 'food', 'stuff'],
    activeCategory: 'all',
  },
  reducers: {
    changeCategory(state, action) {
      return { ...state, activeCategory: action.payload }
    }
  }
})

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice;