const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, content)=>{
    //         res.writeHead(200, {'Content-type':'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, content)=>{
    //         res.writeHead(200, {'Content-type':'text/html'});
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {name:"humayun Ahmad", age: 21},
    //         {name:"Abdullah al Mamun", age: 22}
    //     ];

    //     res.writeHead(200, {'Content-type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // File build dynamic

    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

    // File extention
    let extname = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // check ext and set content type
    switch (extname) {
        case ".js":
            contentType = 'text/javascript';
            break;
        case ".css":
            contentType = 'text/css';
            break;
        case ".json":
            contentType = 'application/json';
            break;
        case ".png":
            contentType = 'image/png';
            break;
        case ".jpg":
            contentType = 'image/jpg';
            break;
    }


    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }
            else{
                // server error
                res.writeHead(500);
                res.end(`Server error ${err.code}`);
            }
        }else{
            // success request
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`) );