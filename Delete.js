const fs = require("fs");

class Delete {
  Delete(filename) {
    fs.unlink(filename, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Arquivo removido com sucesso");
      }
    });
  }
}

module.exports = Delete;
