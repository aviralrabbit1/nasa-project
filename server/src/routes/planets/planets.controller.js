const planets = require('../../models/planets.model');

function getAllPlanets(req, res) {
    return res.status(200).json(planets); 
    // 200 is returned by default
}

module.exports = {
    getAllPlanets,
};
