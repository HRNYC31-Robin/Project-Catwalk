import { connect } from 'react-redux';
import OutFitCard from '../../components/Deo/OutfitProductCard.jsx';
import App from '../../components/App.jsx';
import changeCurrentProduct from '../actions/ProductActions/changeProductAction.js';
import changeURL from '../actions/URLAction.js';

const mapStateToProps = (state) => ({
  URL: state.URL,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeProductClick: (product) => {
    dispatch(changeCurrentProduct(product));
  },
  handleChangeURLClick: (URL) => {
    dispatch(changeURL(URL));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
