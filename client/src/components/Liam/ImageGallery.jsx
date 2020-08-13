import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const ImageGallery = function ({ toggle, currStyle }) {

  return (
    <div className="image-gallery">
      Image Gallery,
      Current style is : {currStyle ? currStyle.name : 'Rendering style'}
      <button
        className="expand-button"
        onClick={toggle}
      >
        []
      </button>
    </div>
  );
};

export default ImageGallery;
