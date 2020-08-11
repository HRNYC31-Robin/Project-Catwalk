import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, Provider } from 'react-redux';
import store from './redux/store/store.js';
import changeProduct from './redux/actions/changeProduct.js';

const mapStateToProps = (state) => ({
  product: state.currentProduct
  //video: state.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
  handleProductChange: (prodInfo) => dispatch(changeProduct(prodInfo))
  //handleSearchInputChange: (q) => dispatch(handleVideoSearch(q)),
});

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
);

//ReactDOM.render(<App />, document.getElementById('app'));
