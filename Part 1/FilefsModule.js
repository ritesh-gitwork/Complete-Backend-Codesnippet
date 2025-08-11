const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

//create

// fs.writeFileSync("./text.txt", "hello from sync23 file");

// fs.writeFile("textasync.txt", "hello from async23 file", (err) => {
//   console.log(err);
// });

//read

// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res);

// const readSync = fs.readFile("./textasync.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// update/append

// fs.appendFileSync(
//   "./text.txt",
//   `this is update to the sync file at ${new Date().toDateString()}`
// );

// fs.appendFile(
//   "textasync.txt",
//   `this is update of async file at ${new Date().toDateString()}`,
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   }
// );

//delete

// fs.unlinkSync("./text.txt");

// fs.unlink("./textasync.txt", (err) => {
//   if (err) throw err;
//   console.log("path/file.txt was deleted");
// });

// hw

// 1.mkdirSync

// fs.mkdir("./part2", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// 2.cpSync
// fs.cpSync(".");
// 3.unlinkSync

// 4.statSync
const stats = fs.statSync("./textasync.txt");
console.log(stats);
