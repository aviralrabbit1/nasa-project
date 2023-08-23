const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use(express.json()); // middleware can be used here

app.use(express.static(path.join(__dirname, '..', 'public'))); //exress middleware
// serve all of our public files using the path.join function

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(planetsRouter);

module.exports = app;
