import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, Provider } from 'react-redux';
import store from './redux/store/store.js';

const mapStateToProps = (state) => ({
  //video: state.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
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
