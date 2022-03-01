import { connect } from 'react-redux';

function Categories({ categories }) {
  console.log(categories);
  return (
    <div>
      <p>working</p>
    </div>
  )
}

function mapStateToProps(state) {
  return ({
    categories: state.category.categories,
  })
}

export default connect(mapStateToProps)(Categories);