const path = require("path");

console.log("Directory", __dirname);
console.log("File", __filename);

// School management

// Folder/Student/Data.txt

// 1. join()
const filepath = path.join("Students", "data.txt");

console.log(filepath);

const parseDataPath = path.parse(filepath);
const resolvePath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({
  parseDataPath,
  resolvePath,
  extname,
  basename,
  dirname,
});
