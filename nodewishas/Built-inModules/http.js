const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

  const name = "Mario"
  res.writeHead(200, { 'Content-Type': 'text/html' });
 
  let html = fs.readFileSync('./index.html', 'utf-8');
  html = html.replace('{{name}}', name);
  res.end(html);
 // fs.createReadStream(__dirname + './index.html').pipe(res);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
}); 

