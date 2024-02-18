const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  cluster.fork();
  cluster.fork();

}else {
  console.log(`Master ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
console.log(numCPUs)