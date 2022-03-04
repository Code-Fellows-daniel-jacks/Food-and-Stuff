import { useState } from 'react';
import { When } from 'react-if';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

function CartMenu({ cart, items, handleRemove }) {
  let [anchorEl, setAnchorEl] = useState(null);
  let open = Boolean(anchorEl);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
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