var notes = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {
    const posted = req.body;
    var idNum = 0;
    idNum++;
    const newNote = { title: posted.title, text: posted.text, id: idNum };
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
  });
};
