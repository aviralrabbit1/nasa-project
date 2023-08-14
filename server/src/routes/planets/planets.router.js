const express = require('express');

// const planetsController = require('./planets.controller');
const { 
    getAllPlanets,
 } = require('./planets.controller');
// middleware, grouping together all planet routes
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
