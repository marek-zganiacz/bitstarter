var express = require('express');
var fs = require("fs")

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buff = fs.readFileSync("index.html");
  response.send(buff.toString());
});

app.get('/css/bootstrap.css', function(request, response) {
    var buff = fs.readFileSync("css/bootstrap.css");
    response.send(buff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
