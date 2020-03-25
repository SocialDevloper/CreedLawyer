const http = require('http');
const routes = require('./routes.js');

//console.log(routes.someText);

const server = http.createServer(routes);
//process.exit();
server.listen(3000);