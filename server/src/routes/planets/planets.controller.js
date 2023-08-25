const { getAllPlanets } = require('../../models/planets.model');
// { planets } will destructure the object returned by the function and planets array

function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets()); 
    // 200 is returned by default
}

module.exports = {
    httpGetAllPlanets,
};
