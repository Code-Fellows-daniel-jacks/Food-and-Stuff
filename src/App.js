import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header';
import Categories from './components/categories';
import Footer from './components/footer';

const reduxStore = store();

function App() {
  return (
    <Provider store={reduxStore}>
      <Header />
      <Categories />
      <Footer />
    </Provider>
  );
}

export default App;
