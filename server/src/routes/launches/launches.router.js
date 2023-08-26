const express = require('express');
const {
    httpgetAllLaunches,
    httpaddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');
const { httpAbortLaunch } = require('../../../../client/src/hooks/requests');

const launchesRouter = express.Router();

launchesRouter.get('/', httpgetAllLaunches); // '/launches'
launchesRouter.post('/', httpaddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;
