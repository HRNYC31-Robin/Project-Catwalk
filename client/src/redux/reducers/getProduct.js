import Redux from "redux";

var getProductReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_PRODUCT":
      return action.product;
    default:
      return state;
  }
};

export default getProductReducer;
