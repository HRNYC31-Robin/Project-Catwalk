import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const SelectQty = function ({ sizeQtyObj }) {

  if (Object.keys(sizeQtyObj).length === 0) {
    return (

      <div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            -
          </Dropdown.Toggle>

          <Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    );
  }

  return (

    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          {sizeQtyObj.selectedQty}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {[... Array(sizeQtyObj.qtyList + 1).keys()].slice(1, 16).map((val, ind) => {
            return (
              <Dropdown.Item
                key={ind}
                value={val}
                onClick={() => {
                  sizeQtyObj.updateSelectedQty(val);
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

export default SelectQty;
