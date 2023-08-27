const { 
    getAllLaunches,
    addNewLaunch,
    existLaunchWithID,
    abortLaunchWithID,
 } = require('../../models/launches.model');
// const { launches } = require('../../models/launches.model');
// const getAllLaunches = require('../../models/launches.model');
// const launchesModel = require('../../models/launches.model');

function httpgetAllLaunches(req, res){ // as any function with http returns response
    // for(value of launches.value()){...};
    return res.status(200).json(getAllLaunches());
    // return res.status(200).json(Array.from(launches.values()));
    // return res.status(200).json(getAllLaunches());
    // return res.status(200).json(launchesModel.getAllLaunches());
    // We only need to know we're getting all launches from launches model
}

function httpaddNewLaunch(req, res){
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if(launch.launchDate.toString() === 'Invalid Date') 
    // or
    // if(isNaN(launch.launchDate))
    {
        return res.status(400).json({
            error: 'Invalid Launch Date',
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch); // Created data success
}

function httpAbortLaunch(req, res){
    const launchId = Number(req.params.id);
    // if launch doesn't exist,
    if(!existLaunchWithID(launchId)){
        return res.status(404).json({
            error: 'Launch not found',
        })
    }
    // if launch exists,
    const aborted = abortLaunchWithID(launchId);{
        return res.status(200).json(aborted);
    }
}

module.exports = {
    httpgetAllLaunches,
    httpaddNewLaunch,
    httpAbortLaunch,
}
