process.env.UV_THREADPOOL_SIZE = 5;      // to distribute the thread size

const fs = require("fs");

// setTimeout(() => {
//   console.log("helloo from timeout");
// }, 2000);

// setInterval(() => {
//   console.log("hello from set interval");
// }, 2000);

// console.log("hellooo from main");

let start = Date.now();

const CRYPTO = require("crypto");

CRYPTO.pbkdf2("password-1", "salt1dffs", 100000, 1024, "sha256", () => {
  console.log(`${Date.now() - start}ms done`);
});
CRYPTO.pbkdf2("password-1", "salt1dffs", 100000, 1024, "sha256", () => {
  console.log(`${Date.now() - start}ms done`);
});
CRYPTO.pbkdf2("password-1", "salt1dffs", 100000, 1024, "sha256", () => {
  console.log(`${Date.now() - start}ms done`);
});
CRYPTO.pbkdf2("password-1", "salt1dffs", 100000, 1024, "sha256", () => {
  console.log(`${Date.now() - start}ms done`);
});
CRYPTO.pbkdf2("password-1", "salt1dffs", 100000, 1024, "sha256", () => {
  console.log(`${Date.now() - start}ms done`);
});
