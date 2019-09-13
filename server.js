// ExpressJS dependency
var express = require("express");
var app = express();

// Built-in middle layer routing service by ExpressJS
var router = express.Router();

// Path to the html files or 'views'
var path = __dirname + "/views/";

router.use(function(req, res, next) {
  console.log("/" + req.method); // Prints type of HTTP request
  next(); // Executes the next router
});

router.get("/", function(req, res) {
  res.sendFile(path + "index.html"); // Sends index to browser
});

// router.get("/about", function(req, res) {
//   res.sendFile(path + "about.html");
// });

// router.get("/contact", function(req, res) {
//   res.sendFile(path + "contact.html");
// });

// Tells express to use the routes defined as var router
app.use("/", router);

// If page requested is not defined
app.use("*", function(req, res) {
  res.sendFile(path + "404.html");
});

var port = 3000;
app.listen(port, function() {
  console.log("Live at Port " + port);
});
