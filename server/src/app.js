const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(express.json()); // middleware can be used here
app.use(planetsRouter);

module.exports = app;
