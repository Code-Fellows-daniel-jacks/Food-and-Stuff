import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { Button, Drawer, List, ListItem } from '@mui/material';

import { changeCategory } from '../../toolkitStore/categories.js';
import { filteredProducts } from '../../toolkitStore/products.js';

import MenuIcon from '@mui/icons-material/Menu';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Left() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);
  const active = useSelector(state => state.category.activeCategory);

  const [open, toggleOpen] = useState(false);

  function toggleDrawer() {
    toggleOpen(!open);
  }

  function handleClick(category) {
    dispatch(changeCategory(category));
    dispatch(filteredProducts(category));
    toggleOpen(!open);
  }

  const anchor = 'left';

  const fontArray = ['Ubuntu Mono, monospace', 'Alfa Slab One, cursive', 'Permanent Marker, cursive'];
  const activeFont = active === 'all' ? fontArray[0] : active === 'food' ? fontArray[1] : fontArray[2];

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer}><MenuIcon style={{ border: '1px solid white', backgroundColor: 'black', padding: '2px', borderRadius: '5px' }} /></Button>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer}
      >
        <div style={{ display: 'flex', width: '18rem', marginLeft: '2rem', textAlign: 'center' }}>
          <h1 style={{ marginTop: '2rem' }}>Shopping&nbsp;</h1>
          <h1 style={{ fontFamily: activeFont, marginTop: '2rem' }}>{active.toUpperCase()}</h1>
        </div>
        <List>
          <h2 style={{ marginLeft: '4.3rem' }}>Categories:</h2>
        {categories.map((category, idx) => {
          return (
            <ListItem style={{ marginLeft: '4.3rem' }} key={category + idx}>
              <h2 style={{ width: '3rem', fontFamily: fontArray[idx] }}>{category.toUpperCase()}</h2>
              <Button onClick={() => handleClick(category)}><TrendingFlatIcon style={{ position: 'absolute', right: '0' }} /></Button>
            </ListItem >
          )
        })}
          <ListItem style={{ marginLeft: '4.3rem', }}><Button><Link style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em', fontWeight: '800' }} to='/cart'>Go To Cart <ShoppingCartIcon /></Link></Button></ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default Left;