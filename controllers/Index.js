const express = require('express');
const coatsController = require('./coatsController');
const locationsController = require('./locationsController');

const controllers = express.Router();

controllers.use('/coats', coatsController);
controllers.use('/locations', locationsController);

module.exports = controllers;
