import { useSelector, useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getProducts } from '../../store/products.js';
import { updateProducts } from '../../store/products.js';
import { addItem } from '../../store/cart.js';
import { useEffect } from 'react';

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.allProducts);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const currentProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  function handleAdd(item) {
    // dispatch(addItem(item));
    dispatch(updateProducts(item, -1));
  }

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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

export default Products;