import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


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
          <FontAwesomeIcon icon={['fas', 'check-circle']} />
        </span>
      </div>
    );
};

export default StyleImg;