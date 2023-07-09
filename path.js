const path = require("path");

console.log("Path join" + path.join(__dirname, ".."));
const fullpath = path.resolve("first", "second", "third");
console.log("Path parse" + path.parse(fullpath));
console.log("Path sep" + path.sep);
console.log("Path isAbsoulute" + path.isAbsolute("first/second"));
console.log("Path basename" + path.basename(fullpath));
console.log("Path extname" + path.extname(fullpath));

//------------------------------//

const siteUrl = "http://localhost:8000/users?id=5123";
const url = new URL(siteUrl);

console.log(url);
