const fs = require("fs");

class GetFiles {
  static GetFiles() {
    const files = fs.readdirSync(__dirname);
    return files;
  }
}

module.exports = GetFiles;
