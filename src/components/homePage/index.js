import { Route } from 'react-router-dom';
import { Fragment } from 'react';

import Header from '../header';
import Drawer from '../drawer';
import ProductForm from '../productForm';
import Products from '../products';
import Footer from '../footer';

import './homePage.scss';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className='option-bar'>
        <Drawer />
        <ProductForm />
      </div>
      <Products />
      <Footer />
    </Fragment>
  )
}