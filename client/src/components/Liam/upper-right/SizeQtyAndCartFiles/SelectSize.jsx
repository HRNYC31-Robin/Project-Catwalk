import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const SelectSize = function () {

  return (


    <div>
      <DropdownButton
        variant="outline-secondary"
        id="dropdown-basic-button"
        title="SELECT SIZE"
      >

        <Dropdown.Item>S</Dropdown.Item>
        <Dropdown.Item>M</Dropdown.Item>
        <Dropdown.Item>L</Dropdown.Item>


      </DropdownButton>
    </div>


  );
};

export default SelectSize;
