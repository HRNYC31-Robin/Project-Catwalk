import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductComparison = (props) => {
  //console.log('INSIDE MODAL: ', props);
  const productFeature = props.clickedProduct.features;
  //console.log(productFeature[0]);
  //console.log('INIDEF FEATURE: ', productFeature);

  const [compareFeature, setCompareFeature] = useState([]);

  useEffect(() => {
    if (props.clickedProduct.length !== 0) {
      //console.log('INSIDE MODAL USE EFFECT');
      //console.log('INSIDE MODAL USE EFFECT', props.clickedProduct.features);
      let combinedFeature = Object.assign(
        {},
        props.clickedProduct.features,
        props.currentProduct.features
      );

      let combinedData = Object.keys(combinedFeature).map((key) => {
        return combinedFeature[key];
      });

      console.log(
        'INSIDE Current : ',
        props.currentProduct.features,
        'INSIDE CLICKED : ',
        props.clickedProduct.features,
        ' COMBINDED :',
        combinedData,
        ' COMbined Feature: ',
        combinedFeature
      );

      setCompareFeature(combinedData);
    }
  }, [props.clickedProduct]);

  const product = [
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
    { productName: 'Product', features: 'GMO', secondProduct: 'Name' },
  ];

  const renderProduct = (compareFeature, index) => {
    return (
      <tr key={index}>
        <td style={{ textAlign: 'left' }}>
          {props.currentProduct.features.find(
            (obj) => obj.features === compareFeature.feature
          )
            ? ' Y'
            : 'N'}
        </td>
        <td style={{ textAlign: 'center' }}>{compareFeature.feature}</td>
        <td style={{ textAlign: 'right' }}>{''}</td>
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
