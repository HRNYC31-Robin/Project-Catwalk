import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  // { videoList: null, currentVideo: null },
  composeWithDevTools(applyMiddleware(thunk))
);

//createStore(reducer, [preloadedState], [enhancer])

export default store;
