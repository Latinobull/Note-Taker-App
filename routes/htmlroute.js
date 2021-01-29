const path = require("path");
const OUTPUT = path.resolve(__dirname, "public");

module.exports = function (app) {
  app.get("*", function (req, res) {
    res.sendFile(path.join(OUTPUT, "index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(OUTPUT, "notes.html"));
  });
};
