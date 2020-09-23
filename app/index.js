const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

const server = http.createServer((req, res) => {
  var filePath = path.join(__dirname, 'index.html');
  var stat = fs.statSync(filePath);

  res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});