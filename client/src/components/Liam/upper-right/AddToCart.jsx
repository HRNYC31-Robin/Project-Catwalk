import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const AddToCart = function () {

  return (
    <div className="dropDowns-addtoCart">
      <div className="sizeAndQty">
        <select className="sizeSelecct">
          <option value="select-size"> Select size </option>
        </select>
        <select className="qtySelect">
          <option value="1"> 1 </option>
        </select>
      </div>
      <div className="addToCartAndStar">
        <div className="cartButtonContainer">
          Add to Cart
        </div>
        <div className="starContainer">
          Star
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
