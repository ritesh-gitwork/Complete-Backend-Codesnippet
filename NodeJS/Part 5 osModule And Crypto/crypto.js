const crypto = require("crypto");

//  1. crypto.randomBytes

// console.log("RandomVlalue \n", crypto.randomBytes(20).toString("hex"));

//  <------ OR ---------->
const randomvalues = crypto.randomBytes(100);

console.log("Random value \n", randomvalues.toString("hex"));

// 2. CreateHash

// const hashValue = crypto.createHash("sha256").update("ritesh").digest("hex");

// const inputValue = "ritesh";
// const matchvalue = crypto.createHash("256").update(inputValue).digest("hex");

// if (hashValue === matchvalue) {
//   console.log("login");
// } else {
//   console.log("failed");
// }

// console.log(hashed);

const hashvalue = crypto.createHash("sha256").update("Suraj").digest("hex");

const inputValue = "Surajs";
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex");

if (hashvalue === matchValue) {
  console.log("you can login");
} else {
  console.log("Something went wrong");
}

// encryption and decryption
