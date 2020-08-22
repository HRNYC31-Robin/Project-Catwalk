/*************************************************
 *          EXPORT ENV VARIABLES
************************************************/

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL,
};

// works for node but not for the webpack