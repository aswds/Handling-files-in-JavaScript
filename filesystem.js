const fs = require("fs");
const path = require("path");
fs;
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFile = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      resolve(data);
    });
  });
};
writeFileAsync(path.resolve(__dirname, "test.txt"), "eredd").then(() => {
  appendFile(path.resolve(__dirname, "test.txt"), "i hate");
});
const text = process.env.TEXT || "";
