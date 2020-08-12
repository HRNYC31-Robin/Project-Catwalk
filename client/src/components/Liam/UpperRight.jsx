import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const UpperRight = function () {

  return (
    <div className="upper-right">
      <div className="product-info">
        Product-info
      </div>
      <div className="style-selector">
        Style Selector
      </div>
      <div className="add-to-cart">
        Add to cart!
      </div>
    </div>
  );
};

export default UpperRight;
