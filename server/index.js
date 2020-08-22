var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
const compression = require('compression');
var app = express();
const { PORT } = require('../config');

//Middleware
app.use(compression());
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('*', (req, res) => {
  // Handles any requests that don't match the ones above
  res.sendFile('index.html', { root: path.join(__dirname, '/../client/dist') });
});

app.listen(PORT, function () {
  console.log('listening on port 3000!');
});
