
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
    case 'ADD_ITEM':
      console.log(payload.name);
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

export default productReducer;