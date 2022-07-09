const http = require("http");

const server = http.createServer((req, res, next) => {
  res.write("hello world!");
  res.end();
});

server.listen(process.env.PORT || 3000);
