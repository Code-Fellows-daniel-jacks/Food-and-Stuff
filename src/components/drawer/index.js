import React, { useState } from 'react';
import { connect } from 'react-redux'; // a function to connect the component to the store
import { Button, Drawer } from '@mui/material';

import { changeCategory } from '../../store/categories.js';
import { updateFiltered } from '../../store/products.js';

function Left({ categories, active, changeCategory }) {
  const [open, toggleOpen] = useState(false);

  function toggleDrawer() {
    toggleOpen(!open);
  }

  function handleClick(category) {
    changeCategory(category);
    updateFiltered(category);
  }

  const anchor = 'left';

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer}>{'left'}</Button>
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

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    active: state.category.activeCategory,
  }
}

const mapDispatchToProps = {
  changeCategory,
  updateFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Left);