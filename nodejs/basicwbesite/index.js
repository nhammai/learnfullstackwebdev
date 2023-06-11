const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (req.url === '/' || req.url === '/index.html') {
    filePath = './index.html';
  } else if (req.url === '/about') {
    filePath = './about.html';
  } else if (req.url === '/contact-me') {
    filePath = './contact-me.html';
  } else {
    filePath = './404.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
}).listen(8080);