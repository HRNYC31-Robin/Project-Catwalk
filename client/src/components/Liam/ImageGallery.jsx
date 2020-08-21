import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const ImageGallery = function ({ toggle, currStyle }) {
  if (!currStyle) {
    return (
      <div className="image-gallery">
        Image Gallery,
        Current style is : {currStyle ? currStyle.name : 'Rendering style'}
        <span
          className="expand-button"
          onClick={toggle}
          style={{fontSize: '30px'}}
        >
          &#9635;
        </span>
      </div>
    );
  }

  const [ currPhotoInd, updatePhotoIndex ] = useState(0);

  return (
    <div className="image-gallery">
      <div className="columnOfImages">
        {currStyle.photos.slice(0, 7).map((photoObj, ind) => {
          return currPhotoInd !== ind ? (
            <img
              key={ind}
              className="littleImage"
              src={photoObj.thumbnail_url}
              onClick={() => {
                updatePhotoIndex(ind);
              }}
            />
          ) : (
            <div
              key={ind}
            >
              <img
                className="littleImage selected"
                src={photoObj.thumbnail_url}
              />
              <div className="horizontalLine">
              </div>
            </div>
          );
        })}
      </div>
      <span
        className="expand-button"
        onClick={toggle}
        style={{fontSize: '30px'}}
      >
        &#9635;
      </span>
      <img
        className="galleryImage"
        src={currStyle.photos[currPhotoInd].url}
      />
    </div>
  );
};

export default ImageGallery;
