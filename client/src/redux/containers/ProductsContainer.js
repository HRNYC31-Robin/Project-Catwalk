import { connect } from 'react-redux';
import Products from '../../components/Deo/Products.jsx';
import changeCurrentProduct from '../actions/changeProductAction.js';
import updateRelatedProducts from '../actions/relatedProductAction.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  relateProducts: state.relateProducts,
  favoriteProduct: state.favoriteProduct,
});

var mapDispatchToProps = (dispatch) => ({
  handleChangeProductClick: (product) => {
    dispatch(changeCurrentProduct(product));
  },
  updateRelatedProductList: (relateProducts) => {
    dispatch(updateRelatedProducts(relateProducts));
  },
});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
