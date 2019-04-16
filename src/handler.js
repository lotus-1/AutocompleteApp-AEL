const fs =require('fs');
const path = require('path');
const handler = (request, response) => {
  const url = request.url;
  if(url === '/') {
    response.writeHead(200, { "Content-Type": "text/html"});
    const filePath = path.join(__dirname, "..", 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
      if(err) {
        response.writeHead(404, { 'Content-Type': 'text/html'});
        response.end('<h1>Page not found</h1>');
      } else {
        response.writeHead(200, { "Content-Type": 'text/html'});
        response.end(file);
      }
    });
  }
}
module.exports = handler;
