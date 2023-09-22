// flexible way of server creation is with http
// we can organise server functionaity separately from express(in app.js)
const http = require('http');

const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 4001;
// "start": "PORT =4000 node src/server.js" in package.json

const MONGO_URL = 'mongodb+srv://nasa-api:ynRfc8muOHiOznLk@nasa-api.cvfeaaj.mongodb.net/?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => { 
    // event emitter on connection ready/error (executed 'once')
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startServer(){
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true, // how mongoose parses connection string
        userFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true, 
    });
    await loadPlanetsData(); // can't call await in top level of file, but inside an asycn function

    server.listen(PORT, ()=> {
        console.log(`Listening on ${PORT}...`);
    });
    // app.listen(); // This can also be used
}

startServer();
