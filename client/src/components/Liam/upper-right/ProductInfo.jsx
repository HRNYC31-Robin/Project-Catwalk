import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const ProductInfo = function ({category}) {

  return (
    <div className="product-info">
      <div className="stars-pi">
        STAR PLACE-HOLDER
      </div>
      <div className="category-pi">
        Category: {category}
      </div>
      <div className="prodName-pi">
        Expanded Product Name
      </div>
      <div className="price-pi">
        $PRICE
      </div>
    </div>
  );
};

export default ProductInfo;
