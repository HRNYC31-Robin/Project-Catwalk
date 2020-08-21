import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import UpperRight from './upper-right/UpperRight.jsx';
import ProductBlurb from './ProductBlurb.jsx';
import Links from './Links.jsx';

const Overview = function ({currentProduct}) {
  const [ expanded, changeExpand ] = useState(false);
  const [ styleList, updateStyleList ] = useState([]);
  const [ styleIndex, changeCurrStyle ] = useState(0);

  const [ currSize, changeCurrSize ] = useState('SELECT SIZE');
  const [ sizeList, updateSizeList ] = useState([]);

  const [ selectedQty, updateSelectedQty ] = useState('-'); // Which quantity is selected
  const [ qtyList, updateTotalQty ] = useState(0); // How much of one qty


  const toggleExpand = () => {
    !expanded ? changeExpand(true) : changeExpand(false);
  };

  const findDefaultStyle = (styList) => {
    for (let i = 0; i < styList.length; i++) {
      if (styList[i]['default?'] === 1) {
        changeCurrStyle(i);
        return i;
      }
    }
    changeCurrStyle(0);
    return 0;
  };

  const handleChangeStyle = (ind) => {
    // Update style
    changeCurrStyle(ind);

    // Update currSize, sizeList, totalQty, currQty

    // Reset current size back and
    changeCurrSize('SELECT SIZE');
    updateSelectedQty('-');

    // Update size List and totalquantity
    /* ATTEMPT AT FIXING EMPTY STYLE LIST :

    var i = 0;
    while (styleList.length === 0 || i < 100000) {
      console.log('Style List: ', styleList);
      updateProduct();
      i++;
    }*/

    const currStyle = styleList[ind];
    const skus = currStyle ? currStyle.skus : {};
    const newSizeList = [];
    for (var skuID in skus) {
      if (skus[skuID].quantity > 0) {
        newSizeList.push(skus[skuID].size);
      }
    }

    if (newSizeList.length === 0) {
      // No quantity for any styles
      updateSelectedQty('OUT OF STOCK');

    }

    updateSizeList(newSizeList);

  };


  const handleChangeCurrSize = (size) => {
    // Change current size selected
    changeCurrSize(size);

    // update current qty to 1
    updateSelectedQty('1');

    // Also need to update quantity based on size
    const currStyle = styleList[styleIndex];
    const skus = currStyle ? currStyle.skus : {};

    for (var skuID in skus) {
      if (skus[skuID].size === size) {
        updateTotalQty(skus[skuID].quantity);
      }
    }
  };


  const updateProduct = () => {
    axios({
      method: 'get',
      url: `http://18.224.37.110/products/${currentProduct.id}/styles`
    })
      .then(({ data }) => {
        //console.log('Styles: ', data.results);
        updateStyleList(data.results);
        let currInd = findDefaultStyle(data.results);
        handleChangeStyle(currInd);
      })
      .catch(err => {
        console.log('Error in retrieving styles: ', err);
      });
  };


  // On mount or update (current product has to change), get styles
  useEffect(() => {
    console.log('Product changed!');
    axios({
      method: 'get',
      url: `http://18.224.37.110/products/${currentProduct.id}/styles`
    })
      .then(({ data }) => {
        //console.log('Styles: ', data.results);
        updateStyleList(data.results);
        let currInd = findDefaultStyle(data.results);
        handleChangeStyle(currInd);
      })
      .catch(err => {
        console.log('Error in retrieving styles: ', err);
      });
  }, [currentProduct]);


  // Put all info for dropdowns together
  const sizeQtyObj = {
    currSize,
    sizeList,
    selectedQty,
    qtyList,
    handleChangeCurrSize,
    updateSelectedQty,
    updateTotalQty,
  };

  // Rendering
  if (!expanded) {
    return (
      <Container className='overviewContainer-normal'>
        <ImageGallery
          toggle={toggleExpand}
          currStyle={styleList[styleIndex]}
        />

        <UpperRight
          currentProduct={currentProduct}
          styleList={styleList}
          styleIndex={styleIndex}
          changeStyle={handleChangeStyle}
          currSize={currSize}
          sizeQtyObj={sizeQtyObj}
        />

        <ProductBlurb slogan={currentProduct.slogan}/>

        <Links />
      </Container>
    );
  } else {
    return (
      <Container className='overviewContainer-expanded'>
        <ImageGallery
          toggle={toggleExpand}
          currStyle={styleList[styleIndex]}
        />

        <div className="lower-portion">
          <ProductBlurb />

          <Links />
        </div>
      </Container>
    );
  }

};

export default Overview;
