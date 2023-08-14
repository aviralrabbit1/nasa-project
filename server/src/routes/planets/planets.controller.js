const { planets } = require('../../models/planets.model');
// { planets } will destructure the object returned by the function and planets array

function getAllPlanets(req, res) {
    return res.status(200).json(planets); 
    // 200 is returned by default
}

module.exports = {
    getAllPlanets,
};
