var notes = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {
    const posted = req.body;
    posted.id = notes.length;
    const newNote = { title: posted.title, text: posted.text, id: posted.id };
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
  });

  app.delete("/api/notes/:id", function (req, res) {
    var notesDelete = notes.filter(({ id }) => id !== req.params.id);
    notes = notesDelete;
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDelete));
    res.json(notesDelete);
  });
};
