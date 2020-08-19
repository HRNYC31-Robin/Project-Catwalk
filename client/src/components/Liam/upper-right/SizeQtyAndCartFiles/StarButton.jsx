import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Button from 'react-bootstrap/Button';


const StarButton = function () {

  return (
    <div>
      <Button variant="outline-secondary">
        Star
      </Button>
    </div>

  );
};

export default StarButton;
