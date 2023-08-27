const express = require('express');
const {
    httpgetAllLaunches,
    httpaddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches); // '/launches'
launchesRouter.post('/', httpaddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;
