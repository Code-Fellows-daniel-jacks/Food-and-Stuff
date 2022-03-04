import { Provider } from 'react-redux';

import toolkitStore from './toolkitStore';

import Header from './components/header';
import Drawer from './components/drawer';
import ProductForm from './components/productForm';
import Products from './components/products';
import Footer from './components/footer';

// const reduxStore = store();

function App() {
  return (
    <Provider store={toolkitStore}>
      <Header />
      <Drawer />
      <ProductForm />
      <Products /> 
      <Footer />
    </Provider>
  );
}

export default App;
