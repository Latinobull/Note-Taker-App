const { fstat } = require("fs");
const path = require("path");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, data) {
      if (err) {
        console.error(err);
      }
      var jsonContent = JSON.parse(data);
      res.json(jsonContent);
    });
  });
};
