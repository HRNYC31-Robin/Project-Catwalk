import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Dropdown from 'react-bootstrap/Dropdown';


const SelectQty = function () {

  return (

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        1
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          1
        </Dropdown.Item>
        <Dropdown.Item >
          2
        </Dropdown.Item>
        <Dropdown.Item
          value="Something else"
          onClick={(e) => {
            console.log(e.target);
          }}>
          3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
};

export default SelectQty;
