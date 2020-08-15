import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const StyleImg = function({ styleObj, ind }) {
  return (
    <img
      className="rowImg"
      src={styleObj.photos[0].thumbnail_url}
    />
  );
};

export default StyleImg;