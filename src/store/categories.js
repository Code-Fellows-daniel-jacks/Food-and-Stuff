const initialState = {
  categories: ['all', 'food', 'stuff'],
  activeCategory: 'all',
}

const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, activeCategory: payload }
    default:
      return state;
  }
}

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export default categoryReducer;