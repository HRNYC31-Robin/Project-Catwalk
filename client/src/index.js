import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
