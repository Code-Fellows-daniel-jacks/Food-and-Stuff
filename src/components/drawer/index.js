import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Button, Drawer } from '@mui/material';

import { changeCategory } from '../../store/categories.js';

import MenuIcon from '@mui/icons-material/Menu';

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
  }

  const anchor = 'left';

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer}><MenuIcon /></Button>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer}
      >
        <h1>Currently shopping {active.toUpperCase()}</h1>
        {categories.map((category, idx) => {
          return (
            <div key={category + idx}>
              <h4>{category}</h4>
              <Button onClick={() => handleClick(category)}>{category}</Button>
            </div>
          )
        })}
      </Drawer>
    </React.Fragment>
  )
}

export default Left;