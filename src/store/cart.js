const initialState = {
  cart: [],
  numberOfItems: 0,
}

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM':
      return { ...state, cart: [...state.cart, payload], numberOfItems: state.numberOfItems + 1 }
    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter(item => item.id !== payload[1]), numberOfItems: state.numberOfItems - 1 }
    case 'UPDATE_PRODUCTS':
      if (payload[1] === -1) {
        return { ...state, cart: [...state.cart, payload[0]], numberOfItems: state.numberOfItems + 1 }
      } else if (payload[1] === 1) {
        let index = state.cart.indexOf(state.cart.find(item => item.name === payload[0].name));
        state.cart.splice(index, 1);
        return { ...state, cart: state.cart, numberOfItems: state.numberOfItems - 1 }
      }
      break;
    default:
      return state
  }
}

export default cartReducer;