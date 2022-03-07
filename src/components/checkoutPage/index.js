import { useState } from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button, List, ListItem } from '@mui/material';

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import { updateProducts } from '../../toolkitStore/products';
import { updateCart } from '../../toolkitStore/cart';

import './checkoutPage.scss';

function CheckoutPage() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const allProducts = useSelector(state => state.products.allProducts);

  let [values, setValues] = useState({});

  function handleChange(e) {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  function handleRemove(item) {
    let value = allProducts.find(product => product.name === item.name).inventory;
    let updateObj = {
      name: item.name,
      goal: 'minus',
      value: value + 1,
      id: item.id,
    }
    dispatch(updateProducts(updateObj));
    dispatch(updateCart(updateObj));
  }

  let processCart = cart.reduce((prev, curr) => {
    if (!prev[curr.name]) {
      prev[curr.name] = [curr];
    } else {
      prev[curr.name].push(curr);
    }
    return prev;
  }, {});

  let displayItems = Object.keys(processCart);
  let itemCounts = Object.values(processCart);

  const fontArray = ['Ubuntu Mono, monospace', 'Alfa Slab One, cursive', 'Permanent Marker, cursive'];
  // const activeFont = product.category === 'food' ? fontArray[1] : fontArray[2];

  return (
    <>
      <Card className='checkout-card'>
        <h1>Checkout</h1>
        <List>
          {displayItems.map((item, idx) => {
            return (
              <ListItem key={item + idx}>
                <p>{item}&nbsp;</p>
                <p>Count: {itemCounts[idx].length}</p>
                <Button color="error" onClick={() => handleRemove(itemCounts[idx].pop())}>REMOVE</Button>
              </ListItem>)
          })}
        </List>
        <form className='checkout-details'>
          <label>
            First name:
            <input
              type='text'
              name='firstName'
              onChange={handleChange}
              required={true} />
          </label>
          <label>
            Last name:
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
              required={true} />
          </label>
          <label>
            Address:
            <input
              type='text'
              name='address'
              onChange={handleChange}
              required={true} />
          </label>
          <label>
            Card Info:
            <input
              type='number'
              name='price'
              onChange={handleChange}
              min={0}
              placeholder='Product Price'
              required={true} />
          </label>
        </form>
        <Link to='/'>Home <TrendingFlatIcon /></Link>
      </Card>
    </>
  )
}

export default CheckoutPage;