const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(routes);

app.use((request, response, next) => {
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
})

module.exports = app;