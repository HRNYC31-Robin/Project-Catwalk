import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import StyleRows from './StyleRows.jsx';


const StyleSelector = function ({ styleList, styleIndex }) {

  return (
    <div className="style-selector">
      <p>
        Style-Selector
      </p>
      <div className="styleIMGS">
        {styleList.length <= 4 ? (
          // 1 row
          <StyleRows
            row1={styleList}
            currIndex={styleIndex}
          />
        ) : (
          styleList.length <= 8 ? (
            // 2 rows
            <StyleRows
              row1={styleList.slice(0, 4)}
              row2={styleList.slice(4, 8)}
              currIndex={styleIndex}
            />
          ) : (
            // 3 rows (cap at 12 total)
            <StyleRows
              row1={styleList.slice(0, 4)}
              row2={styleList.slice(4, 8)}
              row3={styleList.slice(8, 12)}
              currIndex={styleIndex}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StyleSelector;
