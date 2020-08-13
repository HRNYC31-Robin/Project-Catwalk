import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductComparison = ({ displayModal, closeModalFunc }) => {
  const product = [
    {
      productName: 'Product',
      features: 'GMddddddssdfsdfO',
      secondProduct: 'Name',
    },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
  ];

  const renderProduct = (product, index) => {
    return (
      <tr key={index}>
        <td>{product.productName}</td>
        <td>{product.features}</td>
        <td style={{ textAlign: 'right' }}>{product.secondProduct}</td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <Modal
        show={displayModal}
        onHide={closeModalFunc}
        backdrop='static'
        keyboard={false}
        size='lg'
        className='modalProduct'
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comparing</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title>
            <table id='classTable' class='table table-borderless'>
              <thead>
                <tr>
                  <th className='firstProduct'>ProductName</th>
                  <th className='middleProduct'></th>
                  <th className='secondProduct'>SecondName</th>
                </tr>
              </thead>
            </table>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table id='classTable' class='table table-bordered'>
            <tbody>{product.map(renderProduct)}</tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              closeModalFunc();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ProductComparison;
