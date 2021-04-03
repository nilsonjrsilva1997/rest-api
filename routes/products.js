const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).send({
        message: 'Route product, get'
    });
});

router.get('/:id', (request, response, next) => {
    let id = request.params.
    
    response.status(200).send({
        message: 'Route product with params, get ',
        id: id
    });
});

router.post('/', (request, response, next) => {
    response.status(201).send({
        message: 'Route product, post'
    });
});

router.put('/', (request, response, next) => {
    response.status(201).send({
        message: 'Route product, put'
    });
});

router.delete('/', (request, response, next) => {
    response.status(201).send({
        message: 'Route product, delete'
    });
});

module.exports = router;