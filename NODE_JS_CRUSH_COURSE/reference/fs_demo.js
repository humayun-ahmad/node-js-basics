const fs = require('fs');
const path = require('path');

// create directory

// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created');
// });


// write file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World! " , err => {
    if (err) throw err;
    console.log('File written to....');
});


// append text
fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), "and this is the new text" , err => {
    if (err) throw err;
    console.log('File written to....');
});



// File read
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});


// File rename
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt') , (err) => {
    if (err) throw err;
    console.log("File rename done!");
});
