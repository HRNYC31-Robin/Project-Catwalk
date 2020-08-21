import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const StyleImg = function({ styleObj, ind, currIndex, changeStyle }) {
  return currIndex !== ind ?
    (
      <>
        <img
          className="rowImg"
          src={styleObj.photos[0].thumbnail_url}
          onClick={() => {
            changeStyle(ind);
          }}
        />
      </>
    ) : (
      <div className="selectedContainer">
        <img
          className="rowImg"
          src={styleObj.photos[0].thumbnail_url}
          onClick={() => {
            changeStyle(ind);
          }}
        />
        <span className="rowOverlay">
          <span className="checkMark">&#10003;</span>
        </span>
      </div>
    );
};

export default StyleImg;