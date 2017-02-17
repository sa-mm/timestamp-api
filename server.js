var express = require('express');
var path = require('path')
var convertString = require('./converter');
var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/*', function (req, res) {
  var re = /%20|^\//g;
  var string = convertString(req.path.replace(re,' ').trim());
  res.send(string);
})

app.listen(3000, function () {
  console.log('Timestamp microservice listening on port 3000!')
})
// console.log(convertString("December 15, 2015"));
// console.log(convertString("1450137600"));