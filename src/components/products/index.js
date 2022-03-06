import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { When } from 'react-if';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { getProducts } from '../../toolkitStore/products.js';
import { updateProducts } from '../../toolkitStore/products.js';
import { updateCart } from '../../toolkitStore/cart.js';
import { useEffect } from 'react';

import meme from '../../img/netConPrblms.jpg';

import './products.scss';

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.allProducts);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const currentProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  console.log('current prod', currentProducts);

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
    <div className='product-container'>
      <When condition={currentProducts.length > 0}>
      {currentProducts.map((item, idx) => {
        return (
          <Card className='product-card' key={idx}>
            <h2 data-testid='title'>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>In Stock: {item.inventory}</p>
            <p>Price: {item.price} dollars</p>
            <Link to={`products/${item.id}`}>Product Details <AssignmentIcon /></Link>
            <Button onClick={() => handleAdd(item)} color="success" variant="contained"><AddShoppingCartIcon /></Button>
          </Card>
        )
      })}
      </When>
      <When condition={!currentProducts.length > 0}>
        <div className='no-items'>
          <h2>Looks like we are out of items..</h2>
          <img src={meme} alt='parks and recreation meme' />
        </div>
      </When>
    </div>
  )
}

export default Products;