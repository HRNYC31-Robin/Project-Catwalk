import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';


const StyleRows = function({ row1, row2, row3, currIndex }) {
  // Have to check if out of stock as well!

  if (!row2 & !row3) {
    // 1 row
    return (
      <div className="oneRows">
        <div className="row1Of1">
          {row1.map((styleObj, ind) => {
            return (
              <img
                className="rowImg"
                src={styleObj.photos[0].thumbnail_url}
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
        <div className="row1Of1">
          {row1.map((styleObj, ind) => {
            return (
              <img
                className="rowImg"
                src={styleObj.photos[0].thumbnail_url}
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
        <div className="row1Of1">
          {row1.map((styleObj, ind) => {
            return (
              <img
                key={ind}
                className="rowImg"
                src={styleObj.photos[0].thumbnail_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default StyleRows;