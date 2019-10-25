// require is a function which help to import module in a file
var http = require('http');
//To include the file System module, use the require() method;
var fs = require('fs');

// create a server object:
http.createServer(function (req,res) {
// Open a file on the server and return its content:
  fs.readFile('demofile1.html', function (err,data) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); // the server object listens on port 3000
