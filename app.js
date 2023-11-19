const express = require('express')
const app = express()

const cors = require('cors')
const resourcesController = require('./controllers/resourcesController')

app.use(cors())
app.use(express.json())

app.use('/resources', resourcesController)

app.get('/', (req, res) => {
    res.status(200).send('Why did the warm-hearted scarf donate to the coat drive? Because it wanted to give someone a cozy hug in need!')
})

app.get('*', (req, res) => {
    res.status(404).send('Error: Invalid Route')
})

module.exports = app