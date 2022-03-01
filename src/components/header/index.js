import React, { useState } from 'react';
import { connect } from 'react-redux'; // a function to connect the component to the store
import { Button, Drawer } from '@mui/material';

function Header({ categories }) {
  const [open, toggleOpen] = useState(false);

  function toggleDrawer() {
    toggleOpen(!open);
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
        <h1>This is my Header Drawer</h1>
        {categories.map((category, idx) => {
          return (
            <div key={category + idx}>{category}</div>
          )
        })}
      </Drawer>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  }
}

export default connect(mapStateToProps)(Header);