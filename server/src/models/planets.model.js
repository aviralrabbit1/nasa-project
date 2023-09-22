const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const habitablePlanets = []; // storing as strings

// Values taken from - 
// https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/
// https://phl.upr.edu/projects/habitable-exoplanets-catalog
function isHabitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 //amount of light from sun compared to earth
    && planet['koi_prad']<1.6; // radius of planet compared to earth
}

function loadPlanetsData(){
    // stream won't work without promise as node won't wait before the module exports planets before loading
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({    // connects readable source(kepler) to writeable destination (parse()), returns js object
                comment: '#',
                columns: true,  // return each row as js object as key value pair
            }))     
            .on('data', (data) => {
                if(isHabitable(data)){
                    habitablePlanets.push(data);
                }
            })
            .on('err', (err) => {
                console.log(err);
            })    
            .on('end', () => {
                console.log(habitablePlanets.length + " habitable planets found!");
                resolve(); // call after data is parsed
            });
    });
}

function getAllPlanets(){
    return habitablePlanets;
}

module.exports = {
    loadPlanetsData,
    // planets: habitablePlanets,
    getAllPlanets,
};
