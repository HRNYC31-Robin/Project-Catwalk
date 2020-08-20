import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const SelectQty = function () {

  return (

    <div>
      <DropdownButton
        variant="outline-secondary"
        id="dropdown-variants-outline-secondary"
        title="1"
      >
        <Dropdown.Item>2</Dropdown.Item>
        <Dropdown.Item>3</Dropdown.Item>
        <Dropdown.Item>4</Dropdown.Item>
      </DropdownButton>
    </div>

  );
};

export default SelectQty;
