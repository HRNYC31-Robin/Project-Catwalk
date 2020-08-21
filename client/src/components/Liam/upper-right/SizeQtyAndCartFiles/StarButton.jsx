import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


const StarButton = function ({ prodID }) {
  // console.log('Prod ID: ', prodID);
  /*const storage = localStorage.getItem('FEC');
  const favProdIds = [];

  if (storage !== null) {
    for (let locObj of localStorage.getItem('FEC')) {
      //if (locObj.product_id) {
        console.log(locObj);
      //}
    }
  }
  console.log('STORAGE: ', favProdIds);*/

  return (
    <div>
      <Button
        variant="outline-secondary"
        style={{fontSize: '20px' }}
      >
        &#9734;
      </Button>
    </div>

  );
};

export default StarButton;
