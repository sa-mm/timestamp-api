var convertString = function (str) {
  var output = {}
  var unixRe = /\d{10}/
  var utcRe = /[\d]{4}-\d{1,}-\d{1,}/
  if (str.match(unixRe)) {
    // it's unix, so set utc
    output.utc = setUtc(+str)
    output.unix = str
  } else if (str.match(utcRe)) {
    // it's a utc language date, so set both
    output.unix = setUnix(str)
    output.utc = setUtc(str)
  } else if (str.length === 0) {
    const date = new Date()
    output.unix = date.getTime().toString()
    output.utc = date.toUTCString()
  } else {
    output = { 'error': 'Invalid Date' }
  }
  // output is object literal
  return output
}

function setUnix (str) {
  var date = new Date(str)
  return date.getTime().toString()
}

function setUtc (str) {
  var date = new Date(str)
  return date.toUTCString()
}

module.exports = convertString

// Example usage:
// https://curse-arrow.glitch.me/api/timestamp/1450137600000
// https://curse-arrow.glitch.me/api/timestamp/2015-12-25
