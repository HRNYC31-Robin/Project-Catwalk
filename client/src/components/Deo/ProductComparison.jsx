import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ProductComparison = (props) => {
  const productFeature = props.clickedProduct.features;
  const [compareFeature, setCompareFeature] = useState([]);

  useEffect(() => {
    if (props.clickedProduct.length !== 0) {
      let combinedFeature = Object.assign(
        {},
        props.clickedProduct.features,
        props.currentProduct.features
      );

      let combinedData = Object.keys(combinedFeature).map((key) => {
        return combinedFeature[key];
      });

      setCompareFeature(combinedData);
    }
  }, [props.clickedProduct]);

  const renderProduct = (compareFeature, index) => {
    return (
      <tr key={index}>
        <td style={{ textAlign: 'left' }}>
          {props.currentProduct.features.find(
            (obj) => obj.value === compareFeature.value
          ) ? (
              <span className='checkMark'>&#10003;</span>
            ) : (
              ''
            )}
        </td>
        <td style={{ textAlign: 'center' }}>{compareFeature.value}</td>
        <td style={{ textAlign: 'right' }}>
          {props.clickedProduct.features.find(
            (obj) => obj.value === compareFeature.value
          ) ? (
              <span className='checkMark'>&#10003;</span>
            ) : (
              ''
            )}
        </td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <Modal
        show={props.displayModal}
        onHide={props.closeModalFunc}
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
            <table id='classTable' className='table table-borderless'>
              <thead>
                <tr>
                  <th className='firstProduct'>{props.currentProduct.name}</th>
                  <th className='middleProduct'></th>
                  <th className='secondProduct'>
                    {props.clickedProduct.length !== 0
                      ? props.clickedProduct.name
                      : ''}
                  </th>
                </tr>
              </thead>
            </table>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table id='classTable' className='table table-borderless'>
            <tbody>{compareFeature.map(renderProduct)}</tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              props.closeModalFunc();
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
