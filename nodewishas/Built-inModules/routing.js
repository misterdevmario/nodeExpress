const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
if (req.url === '/') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Home Page');
}
if (req.url === '/about') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('About Page');
}
if (req.url === '/contact') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Contact Page');
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not Found');
}

});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
}); 

