import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Products({ active, products }) {
  const [currentProducts, updateCurrentProducts] = useState(products);
  console.log(currentProducts);

  useEffect(() => {
    if (active === 'all') updateCurrentProducts(products);
    else updateCurrentProducts(products.filter(product => product.category === active))
  }, [active]);

  return (
    <div>
      {currentProducts.map((item, idx) => {
        return (
          <div key={idx}>{item.name}</div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.category.allProducts,
    active: state.category.activeCategory
  }
}

export default connect(mapStateToProps)(Products);