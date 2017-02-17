var convertString = function (str) {
  var output = {unix: null, natural: null};
  var unixRe = /\d{10}/;
  var natRe = /[A-z]{3,}\s\d+,\s\d+/;
  if (str.match(unixRe)) {
    // it's unix, so set natural
    output.natural = setNatural(str);
    output.unix = +str;
  } else if (str.match(natRe)) {
    // it's a natural language date, so set unix
    output.unix = setUnix(str);
    output.natural = str;
  }
  // output is object literal
  return output;
}

function setUnix(str) {
  var date = new Date(str);
  return date.valueOf() / 1000;
}

function setNatural(str) {
  var date = new Date(+str * 1000);
  var naturalDate = formatDate(date);
  return naturalDate;
}

function formatDate(date) {
  // date.getMonth() returns a zero index number for the month
  var monthObj = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December'
  }
  var monthIntStr = date.getMonth().toString();
  var month = monthObj[monthIntStr];

  var day = date.getDate().toString();
  if (day.length < 2) {
      day = '0' + day;
    }

  var year = date.getFullYear().toString();
  
  return month + ' ' + day + ', ' + year;
}

module.exports = convertString;

// Example usage:
// https://timestamp-ms.herokuapp.com/December%2015,%202015
// https://timestamp-ms.herokuapp.com/1450137600
