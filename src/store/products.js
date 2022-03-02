
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

const initialState = {
  allProducts: [new Product('food', 'Ramen', 'quick and easy lunch', .89, 500), new Product('stuff', 'Dead Crow', 'keeps good company', 3.00, 100)],
  filteredProducts: [],
}

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, filteredProducts: state.allProducts.filter(item => item.category === payload) }
    case 'DECREASE_STOCK':
      let decreased = state.allProducts.map(item => {
        if (item.name === payload) {
          item.setInventory(-1)
        }
        return item;
      })
      return { ...state, allProducts: decreased }
    case 'INCREASE_STOCK':
      let increased = state.allProducts.map(item => {
        if (item.name === payload) {
          item.setInventory(1)
        }
        return item;
      })
      return { ...state, allProducts: increased }
    default:
      return state;
  }
}

export function updateFiltered(category) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export function decreaseStock(name) {
  return {
    type: 'DECREASE_STOCK',
    payload: name,
  }
}

export function increaseStock(name) {
  return {
    type: 'INCREASE_STOCK',
    payload: name,
  }
}

export default productReducer;