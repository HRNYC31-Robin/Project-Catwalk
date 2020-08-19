import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Dropdown from 'react-bootstrap/Dropdown';


const SelectSize = function () {

  return (

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          Action
        </Dropdown.Item>
        <Dropdown.Item >
          Another action
        </Dropdown.Item>
        <Dropdown.Item
          value="Something else"
          onClick={(e) => {
            console.log(e.target);
          }}>
          Something else
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
};

export default SelectSize;
