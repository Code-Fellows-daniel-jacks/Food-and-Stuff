import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header';
import Drawer from './components/drawer';
import Products from './components/products';
import Footer from './components/footer';

const reduxStore = store();

function App() {
  return (
    <Provider store={reduxStore}>
      <Header />
      <Drawer />
      <Products /> 
      <Footer />
    </Provider>
  );
}

export default App;
