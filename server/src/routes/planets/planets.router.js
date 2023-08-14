const express = require('express');

// middleware, grouping together all planet routes
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
