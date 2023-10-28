const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") return res.end("Home page");
  if (req.url === "/about") return res.end("About");
  res.end(`
   <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5001);
