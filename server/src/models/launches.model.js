const launches = new Map();
// Due to pm2, different launches will be created which may not inter-communicate
// This issue can be solved by storing this 'launches' somewhere else -> Database
// or using worker threads, where data can be shared among them

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration XIII',
    rocket: 'Explorer IS2',
    launchDate: new Date('November 29, 2027'),
    target: 'Kepler-1652 b',
    customer: ['ISRO', 'NASA'],
    upcoming: true,
    success: true,
}

// If target has more stuff, target: { name: '', moons: [ moonA, moonB]}, SQL would've been advantagous
// SQL gives ACID transactions, data is persistent and will survive.
// data will be written as whole - atomicity
// Porblem: The data is viable to change in future
// SQL is good when we know about this all
// Else mongoDB's schemaless approach is flexible

launches.set(launch.flightNumber, launch);
// launches.get(100) === launch

function existLaunchWithID(launchId){
    return launches.has(launchId);
}

function abortLaunchWithID(launchId){
    // launch.delete(launchId);
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

function getAllLaunches(){ // data access function, divides reponsibility b/w model and controller
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['ISRO', 'NASA'],
            flightNumber: latestFlightNumber,
    }));    
    // launches.set(launch.flightNumber, launch);    
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithID,
    abortLaunchWithID,
};
