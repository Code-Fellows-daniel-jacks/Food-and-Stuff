import { connect } from 'react-redux';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { addItem } from '../../store/cart.js';
import { decreaseStock } from '../../store/products.js';

function Products({ allProducts, filteredProducts, addItem, decreaseStock }) {
  const currentProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  function handleAdd(item) {
    addItem(item);
    decreaseStock(item.name);
  }

  return (
    <div>
      {currentProducts.map((item, idx) => {
        return (
          <Card key={idx}>
            <h3>{item.name}</h3>
            <p>In Stock: {item.inventory}</p>
            <Button onClick={() => handleAdd(item)} color="success" variant="contained"><AddShoppingCartIcon /></Button>
          </Card>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
    filteredProducts: state.products.filteredProducts,
  }
}

const mapDispatchToProps = {
  addItem,
  decreaseStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);