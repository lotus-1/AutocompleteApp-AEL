const http = require('http');
const port = 4000;
const handler = require('./handler');










const server = http.createServer(handler);
server.listen(port);
console.log('server running');
