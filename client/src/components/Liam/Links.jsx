import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?


const Links = function ({ features }) {
  if (!features || features.length === 0 ) {
    return (
      <div className="sm-links">
        <span className="featureCheck">&#10003;</span>
        <span className="featureText"> Feature here! </span>
      </div>
    );
  }

  return (
    <div className="sm-links">
      {features.map((featureObj, ind) => {
        return (
          <div key={ind} className="feature">
            <span className="featureCheck">&#10003;</span>
            <span className="featureText"> {featureObj.value} </span>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
