import { useSelector, useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getProducts } from '../../toolkitStore/products.js';
import { updateProducts } from '../../toolkitStore/products.js';
import { updateCart } from '../../toolkitStore/cart.js';
import { useEffect } from 'react';

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.allProducts);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const currentProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  function handleAdd(item) {
    let value = allProducts.find(product => product.name === item.name).inventory;
    let updateObj = {
      name: item.name,
      goal: 'add',
      value: value - 1,
      id: item.id,
      item: { ...item },
    }
    dispatch(updateProducts(updateObj));
    dispatch(updateCart(updateObj));
  }

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {currentProducts.map((item, idx) => {
        return (
          <Card key={idx}>
            <h3 data-testid='title'>{item.name}</h3>
            <p>In Stock: {item.inventory}</p>
            <Button onClick={() => handleAdd(item)} color="success" variant="contained"><AddShoppingCartIcon /></Button>
          </Card>
        )
      })}
    </div>
  )
}

export default Products;