const express = require('express');
const app = express();

const cors = require('cors');
const coatsController = require('./controllers/coatsController');
const locationsController = require('./controllers/locationsController'); // Import the locations controller

app.use(cors());
app.use(express.json());

app.use('/coats', coatsController);
app.use('/locations', locationsController); // Use the locations controller with the /locations prefix

app.get('/', (req, res) => {
    res.status(200).send('Why did the warm-hearted scarf donate to the coat drive? Because it wanted to give someone a cozy hug in need!');
});

app.get('*', (req, res) => {
    res.status(404).send('Error: Invalid Route');
});

module.exports = app;
