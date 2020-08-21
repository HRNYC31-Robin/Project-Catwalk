import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const ProductBlurb = function ({ slogan, description }) {

  return (
    <div className="product-blurb">
      <div className="slogan"> {slogan} </div>
      <div className="prodDesc"> {description} </div>
      <div className="vertBar"></div>
    </div>
  );
};

export default ProductBlurb;
