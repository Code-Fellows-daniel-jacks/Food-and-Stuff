import { Route } from 'react-router-dom';
import { Fragment } from 'react';

import Header from '../header';
import Drawer from '../drawer';
import ProductForm from '../productForm';
import Products from '../products';
import Footer from '../footer';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <Drawer />
      <ProductForm />
      <Products />
      <Footer />
    </Fragment>
  )
}