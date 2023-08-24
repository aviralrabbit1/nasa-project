const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Keler Exloration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ISRO', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);
// launches.get(100) === launch

module.exports = {
    launches,
};
