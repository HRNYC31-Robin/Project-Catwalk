import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const SelectSize = function () {

  return (


    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          SELECT SIZE
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>


  );
};

export default SelectSize;
