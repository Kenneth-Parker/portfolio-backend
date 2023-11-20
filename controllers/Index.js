const express = require('express');
const resourcesController = require('./resourcesController');
const locationsController = require('./locationsController');

const controllers = express.Router();

controllers.use('/resources', resourcesController);
controllers.use('/locations', locationsController);

module.exports = controllers;
