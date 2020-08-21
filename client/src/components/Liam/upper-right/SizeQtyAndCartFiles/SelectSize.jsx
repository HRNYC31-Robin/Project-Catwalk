import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const SelectSize = function ({ sizeQtyObj }) {

  if (Object.keys(sizeQtyObj).length === 0) {
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
  }

  return (

    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          SIZE: {sizeQtyObj.currSize}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {sizeQtyObj.sizeList.map((val, ind) => {
            return (
              <Dropdown.Item
                key={ind}
                value={val}
                onClick={() => {
                  sizeQtyObj.handleChangeCurrSize(val);
                }}
              >
                {val}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>

  );
};

export default SelectSize;
