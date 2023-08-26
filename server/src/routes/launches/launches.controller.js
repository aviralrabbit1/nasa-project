const { 
    getAllLaunches,
    addNewLaunch,
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

    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch); // Created data success
}

module.exports = {
    httpgetAllLaunches,
    httpaddNewLaunch,
}
