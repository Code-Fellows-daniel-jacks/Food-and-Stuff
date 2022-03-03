import { nanoid } from 'nanoid';

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
    default:
      return state
  }
}

export function addItem(item) {
  item.id = nanoid();
  let decoupled = JSON.parse(JSON.stringify(item));
  return {
    type: 'ADD_ITEM',
    payload: decoupled,
  }
}

export function removeItem(item) {
  return {
    type: 'REMOVE_ITEM',
    payload: item,
  }
}

export default cartReducer;