import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const StyleSelector = function ({ styleList, styleIndex }) {

  return (
    <div className="style-selector">
      <p>
        Style-Selector
      </p>
      <div className="styleIMGS">
        {styleList.length <= 4 ? (
          // 1 row
          <div className="onerows">
            One Row!
          </div>
        ) : (
          styleList.length <= 8 ? (
            // 2 rows
            <div className="tworows">
              Two Rows!
            </div>
          ) : (
            // 3 rows
            <div className="threerows">
              Three Rows!
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default StyleSelector;
