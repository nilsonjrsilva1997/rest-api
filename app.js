const express = require('express');
const app = express();
const productRouters = require('./routes/products');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use('/product', productRouters);

app.use((request, response, next) => {
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
})

module.exports = app;