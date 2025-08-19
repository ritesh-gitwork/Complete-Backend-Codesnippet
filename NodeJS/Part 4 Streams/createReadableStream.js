const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  highWaterMark: 6, // 4 pe false aayega Hello ke liye lekin agar 6 krenege to true aayega highWaterMark is a crucial option that defines the maximum amount of data (in bytes or objects, depending on the stream's objectMode) that a stream's internal buffer can hold before backpressure is applied.
  read() {},
});

const writableStream = new Writable({
  write(streamData) {
    console.log("writingg......", streamData.toString());
  },
});

readableStream.on("data", (chunk) => {
  console.log("CHUNK : ", chunk.toString());
  writableStream.write(chunk);
});

console.log(readableStream.push("Hello"));
