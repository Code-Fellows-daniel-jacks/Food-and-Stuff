import { useState } from 'react';
import { connect } from 'react-redux';
import { When } from 'react-if';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import { removeItem } from '../../store/cart';
import { increaseStock } from '../../store/products';

import './header.scss';

function Header({ cart, items, removeItem, increaseStock }) {
  let [anchorEl, setAnchorEl] = useState(null);
  let open = Boolean(anchorEl);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleRemove(item) {
    removeItem(item);
    increaseStock(item.name);
  }

  return (
    <header>
      <h1>Food and Stuff</h1>
      <div>
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
          <When condition={cart.length > 0}>
            {cart.map(item => <MenuItem>{item.name}<Button color="error" onClick={() => handleRemove(item)}>REMOVE</Button></MenuItem>)}
          </When>
          <When condition={cart.length === 0}>
            <MenuItem>No Items In Cart</MenuItem>
          </When>
        </Menu>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    items: state.cart.numberOfItems,
  }
}

const mapDispatchToProps = {
  removeItem,
  increaseStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 