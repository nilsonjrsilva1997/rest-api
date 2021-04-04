const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const express = require('express');
const api = express();
const routes = require('./routes');

api.use(express.json());
api.use(routes);

const server = http.createServer(app);
server.listen(port);