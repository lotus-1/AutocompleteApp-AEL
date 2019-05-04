const fs =require('fs');
const path = require('path');
const handler = require('./handler');
const queryString = require('querystring');

const router = (request, response) =>  {
   const url = request.url;
   if (url === '/'){
     handler.handlerHome(request, response);
   } else if (url.indexOf('/public') !== -1) {
      handler.handlerPublic(request, response, url);
   } else if(url.indexOf('/search')  !==  -1) {
     handler.handlerSearch(request, response, url);
   } else {
     console.log(url);
     response.writeHead(404, { 'Content-Type': 'text/html' });
     response.end('<h1> 404 not found </h1>');
   }
};

module.exports = router;
