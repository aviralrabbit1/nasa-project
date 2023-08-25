const express = require('express');

// const planetsController = require('./planets.controller');
const { 
    httpGetAllPlanets,
 } = require('./planets.controller');
// middleware, grouping together all planet routes
const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;
