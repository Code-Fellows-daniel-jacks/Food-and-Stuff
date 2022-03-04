import { useDispatch, useSelector } from 'react-redux';

import CartMenu from './cartMenu/cartMenu';
import { updateProducts } from '../../store/products';

import './header.scss';

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const items = useSelector(state => state.cart.numberOfItems);

  function handleRemove(item) {
    console.log('item passed to remove', item)
    dispatch(updateProducts(item, 1));
  }

  return (
    <header>
      <h1>Food and Stuff</h1>
      <CartMenu cart={cart} items={items} handleRemove={handleRemove} />
    </header>
  )
}

export default Header; 