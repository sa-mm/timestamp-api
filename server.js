var express = require('express');
var path = require('path')
var convertString = require('./converter');
var app = express()

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  console.log(req.hostname);

    console.log(req.baseUrl);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/*', function (req, res) {
  var re = /%20|^\//g;
  var string = convertString(req.path.replace(re,' ').trim());
  res.send(string);
})

app.listen(app.get('port'), function() {
  console.log('Timestamp microservice listening on port 3000!')
})