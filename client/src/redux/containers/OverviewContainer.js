import { connect } from 'react-redux';
import Overview from '../../components/Liam/Overview.jsx';
import changeProduct from '../actions/ProductActions/changeProductAction.js';

var mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
});

var mapDispatchToProps = (dispatch) => ({
  handleProductChange: (prodInfo) => dispatch(changeProduct(prodInfo)),
});

var OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;
