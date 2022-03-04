import { useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import toolkitStore from './toolkitStore';

import HomePage from './components/homePage';
import SingleProductPage from './components/singleProductPage';

function App() {

  const id = useSelector(state => state.products.activeProduct.id);
  const allProducts = useSelector(state => state.products.allProducts);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {allProducts.map((product, idx) => {
          return (
            <Route key={product + idx} path={`/products/${product.id}`} element={<SingleProductPage product={product} />} />
          )
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
