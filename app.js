var express = require("express");
var app = express();

var path = require("path");

var server = app.listen( process.env.PORT || 9001, function(){
  console.log("server listening on port 9001.... IT'S OVER 9000!!!");
});

app.get( "/", function (req,res){
  console.log("hollo werld from teh base url");
  res.writeHead(200);
  res.write("Hello from app.js in herokuInClass challenge!");
  res.end();
});
