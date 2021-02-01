const express = require("express");

const app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Add routes here
require("./routes/htmlroute")(app);
require("./routes/apiroute")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
