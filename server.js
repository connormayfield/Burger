
// EXPRESS
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// STATIC
app.use(express.static("public"));

// PARSE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTE
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// LISTENER
app.listen(PORT, function() {
  console.log("Welcome to port " + PORT);
});
