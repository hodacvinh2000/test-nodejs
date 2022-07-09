const http = require("http");

const server = http.createServer((req, res, next) => {
  console.log(req.url);
});

server.listen(process.env.PORT || 3000);
