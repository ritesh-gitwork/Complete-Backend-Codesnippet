const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //  -------------------- 1  -------------------------
  // Downloadding file in bad way
  //   const file = fs.readFileSync("sample.txt");
  //     res.end(file);
  //   Downloading file in a good way
  // const readableStream = fs.createReadStream("sample.txt");
  // readableStream.pipe(res);
  //res.end();
  // copying file in a bad way
  // const file = fs.readFileSync("sample.txt");
  // fs.writeFileSync("output.txt", file);
  // res.end();
  // copying file in a good way using stream
  // const readStream = fs.createReadStream("sample.txt");
  // const writeStream = fs.createWriteStream("output.txt");
  // readStream.on("data", (chunk) => {
  //   // "data" => jab data aayega tab
  //   console.log("CHUNK : ", chunk);
  //   writeStream.write(chunk);
  // });
});

// <------------------  3 String Processing ------------------->

// uppercase 0
// ipsum  ->  ritesh

const readStream = fs.createReadStream("sample.txt");
const writeStream = fs.createWriteStream("output.txt");

// 1. Bad Approach
readStream.on("data", (chunk) => {
  const modifiedWord = chunk
    .toString()
    .toUpperCase()
    .replaceAll(/ipsum/gi, "ritesh");
  writeStream.write(modifiedWord);
});

server.listen(8080, () => {
  console.log(`sserver is runninggggggg`);
});
