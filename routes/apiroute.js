const { fs } = require("fs");
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

  app.post("/api/notes", function (req, res) {
    let posted = req.body;
    fs.readFile("db/db.json", "utf8", function (err, data) {
      if (err) {
        console.error(err);
      }
      var idNum = 0;
      idNum++;
      var jsonContent = JSON.parse(data);
      var addedNotes = { title: posted.title, text: posted.text, id: idNum };
      jsonContent.push(addedNotes);

      var toString = JSON.stringify(jsonContent);

      fs.writeFile("db/db.json", toString, "utf8", function () {
        res.json(posted);
      });
    });
  });
};
