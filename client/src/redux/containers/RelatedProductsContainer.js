import { connect } from 'react-redux';
import RelatedProductCard from '../../components/Deo/RelatedProductCard.jsx';
import updateRelatedProducts from '../actions/ProductActions/relatedProductAction.js';
import changeCurrentProduct from '../actions/ProductActions/changeProductAction.js';
import changeURL from '../actions/URLAction.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  relatedProducts: state.relatedProducts,
});

const mapDispatchToProps = (dispatch) => ({
  updateRelatedProductList: (relatedProducts) => {
    dispatch(updateRelatedProducts(relatedProducts));
  },
  handleChangeProductClick: (product) => {
    dispatch(changeCurrentProduct(product));
  },
  handleChangeURLClick: (URL) => {
    dispatch(changeURL(URL));
  },
});

const RelatedProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProductCard);

export default RelatedProductContainer;
