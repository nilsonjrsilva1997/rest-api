const express = require('express');
const app = express();
const productRouters = require('./routes/products');

app.use('/product', productRouters);

module.exports = app;