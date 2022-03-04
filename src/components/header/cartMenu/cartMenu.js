import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { When } from 'react-if';
import { updateProducts } from '../../../toolkitStore/products.js';
import { updateCart } from '../../../toolkitStore/cart.js';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

function CartMenu({ cart, items }) {
  let [anchorEl, setAnchorEl] = useState(null);
  let open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.allProducts);
  console.log('PRODUCTS HERE', allProducts);

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

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  console.log('CART HERE', cart);

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

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
      >
        <Badge badgeContent={items}>
          <ShoppingCartIcon />
        </Badge>
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <When condition={displayItems.length > 0}>
          {displayItems.map((item, idx) => {
            return (
              <MenuItem key={item + idx}>
                <Badge badgeContent={itemCounts[idx].length}>{item}</Badge>
                <Button color="error" onClick={() => handleRemove(itemCounts[idx].pop())}>REMOVE</Button>
              </MenuItem>)
          })}
        </When>
        <When condition={displayItems.length === 0}>
          <MenuItem>No Items In Cart</MenuItem>
        </When>
      </Menu>
    </>
  )
}

export default CartMenu;