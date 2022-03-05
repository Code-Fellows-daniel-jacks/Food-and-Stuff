import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import './singleProductPage.scss';


function SingleProductPage({ product }) {

  const fontArray = ['Ubuntu Mono, monospace', 'Alfa Slab One, cursive', 'Permanent Marker, cursive'];
  const activeFont = product.category === 'food' ? fontArray[1] : fontArray[2];

  return (
    <>
      <Card className='single-product-card'>
        <h1>{product.name}</h1>
        <div className='product-details'>
          <p>Description: {product.description}</p>
          <p>In Stock: {product.inventory}</p>
          <p>Price: {product.price}</p>
          <div className='category-text'>
            <p>Category:&nbsp;</p><p style={{ fontFamily: activeFont }}>{product.category}</p>
          </div>
        </div>
        <Link to='/'>Home <TrendingFlatIcon /></Link>
      </Card>
    </>
  )
}

export default SingleProductPage;