import { connect } from 'react-redux';
import ProductCard from '../components/Deo/ProductCard.jsx';

var mapStateToProps = (state) => ({
  productList: state.productList,
});

var ProductCardContainer = connect(mapStateToProps, null)(ProductCard);

export default ProductCardContainer;
