const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const url = req.url;
  if (url === "/h1") res.end("<H1>h1</H1>");
  if (url === "/h2") res.end("<H2>h2</H2>");
  if (url === "/h3") res.end("<H3>h3</H3>");
  if (url === "/h4") res.end("<H4>h4</H4>");
});

server.listen(8080, () => {
  console.log("server: http://localhost:8080");
});
