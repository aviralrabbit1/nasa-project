// flexible way of server creation is with http
// we can organise server functionaity separately from express(in app.js)
const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 4000;
// "start": "PORT =4000 node src/server.js" in package.json

const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData(); // can't call await in top level of file, but inside an asycn function

    server.listen(PORT, ()=> {
        console.log(`Listening on ${PORT}...`);
    });
    // app.listen(); // This can also be used
}

startServer();
