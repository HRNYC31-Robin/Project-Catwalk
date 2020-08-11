import { connect } from 'react-redux';
import Products from '../../components/Deo/Products.jsx';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  productList: state.productList,
  favoriteProduct: state.favoriteProduct,
});

const ProductsContainer = connect(mapStateToProps, null)(Products);

export default ProductsContainer;
