class Product {
  constructor(category, name, description, price, inventory) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
    this.inventory = inventory;
  }
}

const initialState = {
  allProducts: [new Product('food', 'Ramen', 'quick and easy lunch', .89, 500), new Product('stuff', 'Dead Crow', 'keeps good company', 3.00, 100)],
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