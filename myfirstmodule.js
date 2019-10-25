// To include a module, use the require() function with the name of the module
var http = require('http');
var dt = require('./myDateTime');

http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(3000);
