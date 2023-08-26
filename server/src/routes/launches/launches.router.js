const express = require('express');
const {
    httpgetAllLaunches,
    httpaddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches); // '/launches'
launchesRouter.post('/', httpaddNewLaunch);

module.exports = launchesRouter;
