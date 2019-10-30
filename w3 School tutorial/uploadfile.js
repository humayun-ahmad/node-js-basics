// include module
var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// create createServer
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action = "fileupload" method ="post" enctype = "multipart/form-data">');
    res.write('<input type = "file" name = "filetopuload" > <br>');
    res.write('<input type = "submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);
