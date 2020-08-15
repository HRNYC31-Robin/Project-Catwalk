import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';


const UpperRight = function ({
  currentProduct,
  styleList,
  styleIndex
}) {

  return (
    <div className="upper-right">
      <ProductInfo
        category={currentProduct.category}
        name={currentProduct.name}
        currStyle={styleList[styleIndex]}
      />

      <StyleSelector
        styleList={styleList}
        styleIndex={styleIndex}
      />

      <AddToCart />
    </div>
  );
};

export default UpperRight;
