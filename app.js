var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var  app = express();



app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})


app.listen(3000)
