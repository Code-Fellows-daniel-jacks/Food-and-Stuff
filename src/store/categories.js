const initialState = {
  categories: ['shoes', 'tops', 'bottoms'],
  activeCategory: 'shoes',
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