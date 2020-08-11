const axios = require('axios');

const getProductByID = (ID, callback) => {
  axios
    .get('http://18.224.200.47/products/', ID)
    .then((row) => {
      callback(null, row);
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports.getProductByID = getProductByID;
