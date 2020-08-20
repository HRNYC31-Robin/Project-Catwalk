import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


const StarButton = function () {

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
