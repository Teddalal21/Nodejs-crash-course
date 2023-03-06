const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
//    if(req.url === '/'){
// fs.readFile(path.join(__dirname, 'public','index.html'), 
// (err, content) => {
//   if(err) throw err;

//   res.writeHead(200, {'content-type': 'text/html' });
//   res.end(content);
// })

   
//    }

//    if(req.url === '/api/users'){
//    const users = [

//    { name: 'Tadesse Tsega', age: 21},
//    { name: 'tolla lemma', age:23}
//    ];
//    res.writeHead(200, {'content-type': 'application/json' });
//    res.end(JSON.stringify(users));
//        }

// build hthe file path
let filePath = path.join
(__dirname,
  'public', req.url === '/'?'index.html': req.url);

// console.log(filePath);
// res.end();

// extension of the file
let extname =path.extname(filePath);

// intital content type
let contentType = 'text/html';

// set ext and the content type
switch(extname) {
  case '.js':
  contentType = 'text/javascript';
  break;
  case '.css':
  contentType = 'text/css';
  break;
  case '.json':
  contentType = 'application/json';
  break;
  case '.png':
  contentType = 'image/png';
  break;
  case '.jpg':
  contentType = 'image/jpg';
  break;
}

// read file
fs.readFile(filePath, (err,content) => {
   if(err) {
    if(err.code == 'ENOENT'){
      // page not found
      fs.readFile(path.join(__dirname,'public','404.html'),
       (err, content) => {
        res.writeHead(200, {'content-Type': 'text/html' });
        res.end(content, 'utf8');
      });
    }
  else {
    // some server error
    res.writeHead(500);
    res.end('Server Error:',err.code);
  }
   }
   else{
    //success
    res.writeHead(200, {'content-Type': contentType });
    res.end(content, 'utf8');
   }
});

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on port', PORT));