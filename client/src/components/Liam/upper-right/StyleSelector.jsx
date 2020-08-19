import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import StyleRows from './StyleSelectorFiles/StyleRows.jsx';


const StyleSelector = function ({ styleList, styleIndex, changeStyle }) {
  let currStyle = styleList[styleIndex] ? styleList[styleIndex].name : 'Rendering style';

  return (
    <div className="style-selector">
      <span className="selector-text">
        STYLE {'> '}
      </span>
      <span>
        {currStyle}
      </span>
      <div className="styleIMGS">
        {styleList.length <= 4 ? (
          // 1 row
          <StyleRows
            row1={styleList}
            currIndex={styleIndex}
            changeStyle={changeStyle}
          />
        ) : (
          styleList.length <= 8 ? (
            // 2 rows
            <StyleRows
              row1={styleList.slice(0, 4)}
              row2={styleList.slice(4, 8)}
              currIndex={styleIndex}
              changeStyle={changeStyle}
            />
          ) : (
            // 3 rows (cap at 12 total)
            <StyleRows
              row1={styleList.slice(0, 4)}
              row2={styleList.slice(4, 8)}
              row3={styleList.slice(8, 12)}
              currIndex={styleIndex}
              changeStyle={changeStyle}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StyleSelector;
