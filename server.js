var express = require('express')
var path = require('path')
var convertString = require('./converter')
var app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/timestamp/:date_string', function (req, res) {
  var obj = convertString(req.params.date_string)
  res.send(JSON.stringify(obj))
})

app.listen(app.get('port'), function () {
  console.log('Timestamp microservice listening on port ' + app.get('port'))
})
