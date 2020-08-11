import { combineReducers } from "redux";
import getProductReducer from "./getProduct.js";
//import videoListReducer from "./videoList.js";

var rootReducer = combineReducers({
  currentProduct: getProductReducer
  //currentVideo: currentVideoReducer,
  //videoList: videoListReducer,
});


export default rootReducer;
