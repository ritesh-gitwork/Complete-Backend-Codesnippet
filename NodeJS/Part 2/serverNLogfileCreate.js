const http = require("http");

const fs = require("fs");

const PORT = 8080;

console.log(PORT);

const server = http.createServer((req, res) => {
  const log = `${Date.now}: from ${res.url} new request received \n`;
  // console.log(log);

  fs.appendFile("./log.txt", log, (err) => {
    if (err) {
      console.error("Error Writing to the log file ", err);
      res.statusCode = 500;
      res.end("internal server error");
      return;
    }

    res.end("helloo frrooommm server");
  });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
