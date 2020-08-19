import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import SizeQtyAndCart from './SizeQtyAndCart.jsx';


const UpperRight = function ({
  currentProduct,
  styleList,
  styleIndex,
  changeStyle
}) {

  return (
    <div className="upper-right">
      <ProductInfo
        category={currentProduct.category}
        name={currentProduct.name}
        currStyle={styleList[styleIndex]}
        prodId={currentProduct.id}
      />

      <StyleSelector
        styleList={styleList}
        styleIndex={styleIndex}
        changeStyle={changeStyle}
      />

      <SizeQtyAndCart />
    </div>
  );
};

export default UpperRight;
