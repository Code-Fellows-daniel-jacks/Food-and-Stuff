import { Link } from 'react-router-dom';

function SingleProductPage({ product }) {
  return (
    <>
      <div>{product.name}</div>
      <Link to='/'>Home</Link>
    </>
  )
}

export default SingleProductPage;