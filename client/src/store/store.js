import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import data from '../../data/data.js';
import { composeWithDevTools } from 'redux-devtools-extension'; // Support for redux dev tool

const store = createStore(
  rootReducer,
  { currentProduct: data[0], productList: data, favoriteProduct: [] },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
