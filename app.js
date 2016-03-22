var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var  app = express();
var logger = require("morgan")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// mongoose coonnection
var db = 'mongodb://localhost/itemLister'
mongoose.connect(db);

var User = require("./models/User.js");
var Item = require("./models/Item.js");

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})


app.listen(3000)
