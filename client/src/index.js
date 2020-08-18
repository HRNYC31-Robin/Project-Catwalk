import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import AppContainer from './redux/containers/appContainer.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={'/products/:id'} component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
