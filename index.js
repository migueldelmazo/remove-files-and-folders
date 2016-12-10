const fs = require('fs'),

  deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file, index) => {
        const currentPath = path + '/' + file;
        if (fs.lstatSync(currentPath).isDirectory()) {
          // recurse
          deleteFolderRecursive(currentPath);
        } else {
          // delete file
          fs.unlinkSync(currentPath);
        }
        console.log(currentPath);
      });
      fs.rmdirSync(path);
    }
  },

  path = process.argv[2];

if (path) {
  deleteFolderRecursive(process.argv[2]);
}
