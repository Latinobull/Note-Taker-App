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
    var newNotes = [];
    var idSearch = req.params.id;

    for (i = 0; i < notes.length; i++) {
      if (idSearch != notes[i].id) {
        newNotes.push(notes[i]);
      }
    }

    notes = newNotes;
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));

    res.json(notes);
  });
};
