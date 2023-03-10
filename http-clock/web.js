/**
 * 模拟一个静态资源服务器
 * 一般框架都会集成
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile(path.join(__dirname, req.url), "utf-8", (err, data) => {
    if (err) {
      res.end(err.message);
    } else {
      res.end(data);
    }
  });
});

const port = 8080;

server.listen(port, () => `http://localhost:${port}`);
