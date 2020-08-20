import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SelectSize from './SizeQtyAndCartFiles/SelectSize.jsx';
import SelectQty from './SizeQtyAndCartFiles/SelectQty.jsx';
import AddToCart from './SizeQtyAndCartFiles/AddToCart.jsx';
import StarButton from './SizeQtyAndCartFiles/StarButton.jsx';


const SizeQtyAndCart = function () {
  //console.log(sizeQtyObj);

  return (
    <div className="dropDowns-addtoCart">

      <div className="sizeAndQty">

        <SelectSize />

        <SelectQty />

      </div>

      <div className="addToCartAndStar">

        <AddToCart />

        <StarButton />

      </div>

    </div>
  );
};

export default SizeQtyAndCart;
