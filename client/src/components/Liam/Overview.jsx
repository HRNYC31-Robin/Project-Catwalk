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
  const [ qtyList, updateTotalQty ] = useState([]); // How much of one qty

  let sizeQtyObj = {
    currSize,
    sizeList,
    selectedQty,
    qtyList,
    changeCurrSize,
    updateSelectedQty,
    updateTotalQty,
  };

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
  };

  const handleChangeStyle = (ind) => {
    // Update style
    changeCurrStyle(ind);

    // Update currSize, sizeList, totalQty, currQty

    // Reset current size back and
    changeCurrSize('SELECT SIZE');
    updateSelectedQty('-');

    // Update size List and totalquantity
    const currStyle = styleList[ind];
    const skus = currStyle.skus;
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


  // On mount or update (current product has to change), get styles
  useEffect(() => {
    console.log('Current product: (overview useEffect) ', currentProduct);
    axios({
      method: 'get',
      url: `http://18.224.37.110/products/${currentProduct.id}/styles`
    })
      .then(({ data }) => {
        console.log('Styles: ', data.results);
        updateStyleList(data.results);
        let currInd = findDefaultStyle(data.results);
        handleChangeStyle(currInd);
      })
      .catch(err => {
        console.log('Error in retrieving styles: ', err);
      });
  }, [currentProduct]);


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

        <ProductBlurb />

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
