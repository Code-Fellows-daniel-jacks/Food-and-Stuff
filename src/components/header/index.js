import { useDispatch, useSelector } from 'react-redux';
import CartMenu from './cartMenu/cartMenu';

import './header.scss';

function Header() {
  const cart = useSelector(state => state.cart.cart);
  const items = useSelector(state => state.cart.numberOfItems);

  return (
    <header>
      <div style={{ display: 'flex' }}>
        <h1 className='titleOne'>Food&nbsp;</h1><h1>and&nbsp;</h1><h1 className='titleTwo'>Stuff</h1>
      </div>
      <CartMenu cart={cart} items={items} />
    </header>
  )
}

export default Header; 