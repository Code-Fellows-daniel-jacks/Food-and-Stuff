import { useDispatch, useSelector } from 'react-redux';
import CartMenu from './cartMenu/cartMenu';

import './header.scss';

function Header() {
  const cart = useSelector(state => state.cart.cart);
  const items = useSelector(state => state.cart.numberOfItems);

  return (
    <header>
      <h1>Food and Stuff</h1>
      <CartMenu cart={cart} items={items} />
    </header>
  )
}

export default Header; 