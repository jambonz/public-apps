const express = require('express');
const endpoints = require('./endpoints');

const routes = express.Router();

routes.use('/', endpoints);

module.exports = routes;
