import { combineReducers } from 'redux';
import currentProduct from './productReducer.js';
import productList from './productCardReducer.js';

const rootReducer = combineReducers({
  currentProduct: currentProduct,
  productList: productList,
});

export default rootReducer;
