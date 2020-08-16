import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import StyleImg from './StyleImg.jsx';


const StyleRows = function({ row1, row2, row3, currIndex, changeStyle }) {
  // Have to check if out of stock as well!

  if (!row2 & !row3) {
    // 1 row
    return (
      <div className="oneRows">
        <div className="row1Or2">
          {row1.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
      </div>
    );

  } else if (!row3) {
    // 2 rows
    return (
      <div className="twoRows">
        <div className="row1Or2">
          {row1.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
        <div className="row1Or2 row2">
          {row2.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind + 4}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    // 3 rows
    return (
      <div className="threeRows">
        <div className="row3">
          {row1.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
        <div className="row3 r2or3">
          {row2.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind + 4}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
        <div className="row3 r2or3">
          {row3.map((styleObj, ind) => {
            return (
              <StyleImg
                key={ind}
                styleObj={styleObj}
                ind={ind + 8}
                currIndex={currIndex}
                changeStyle={changeStyle}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default StyleRows;