import { connect } from 'react-redux';

import CartMenu from './cartMenu/cartMenu';
import { removeItem } from '../../store/cart';

import './header.scss';

function Header({ cart, items, removeItem }) {
  return (
    <header>
      <h1>Food and Stuff</h1>
      <CartMenu cart={cart} items={items} removeItem={removeItem} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 