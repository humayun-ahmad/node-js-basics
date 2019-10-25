// require is a function which help to import module in a file
var http = require('http');

// create a server object:
http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  // Return the url part of the request object:
  res.write(req.url)
  res.end(); // end the response
}).listen(3000); // the server object listens on port 3000

// for run this code please type:
// http://127.0.0.1:3000/winter
