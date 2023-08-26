const launches = new Map();

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

launches.set(launch.flightNumber, launch);
// launches.get(100) === launch

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
};
