const path = require("path");
const fs = require("fs");

// fs.mkdir(
//   path.resolve(__dirname, "dir"),

//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder was created");
//   }
// );
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, "test.txt"), "4 edf s2", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File edited");
//   fs.appendFile(
//     path.resolve(__dirname, "test.txt"),
//     "ADDED IN THE END",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Added");
//     }
//   );
// });

const writeFile = async (path, data) => {
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
        return reject(err.message);
      }
      resolve();
    });
  });
};


writeFile(path.resolve(__dirname, "test.txt"), "data")
  .then(() => {
    appendFile(path.resolve(__dirname, "test.txt"), " END");
  })
  .then(() => {
    appendFile(path.resolve(__dirname, "test.txt"), " END");
  })
  .then(() => {
    appendFile(path.resolve(__dirname, "test.txt"), " END");
  })
  .catch((err) => console.log(err));
