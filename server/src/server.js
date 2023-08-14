// flexible way of server creation is with http
// we can organise server functionaity separately from express(in app.js)
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 4000;
// "start": "PORT =4000 node src/server.js" in package.json

const server = http.createServer(app);

server.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}...`);
});
// app.listen(); // This can also be used
