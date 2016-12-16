var express = require('express');


var app = express();


var server = app.listen(process.env.PORT || 8000, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.get('/', hello);

function hello(req, res) {
  res.send('Hello World!');
}