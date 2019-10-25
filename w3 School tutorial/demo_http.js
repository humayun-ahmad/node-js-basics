// require is a function which help to import module in a file
var http = require('http');

// create a server object:
http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write("Hello World!\n") // write a response to the client
  res.end("the programe was end"); // end the response
}).listen(3000); // the server object listens on port 3000
