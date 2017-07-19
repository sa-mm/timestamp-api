var test = require('tape')
var convertString = require('../converter')

test('short string of numbers returns error', function (t) {
  t.plan(2)
  const actual = { 'error': 'Invalid Date' }
  t.deepEqual(convertString('1'), actual, '"1" --> {"error" : "Invalid Date" }')
  t.deepEqual(convertString('987'), actual, '"987" --> {"error" : "Invalid Date" }')
})

test('unix timestamp returns correct results', (t) => {
  t.plan(2)
  const actual = convertString('1450137600000')
  t.deepEqual(actual.utc, 'Tue, 15 Dec 2015 00:00:00 GMT', 'utc is correctly returned')
  t.deepEqual(actual.unix, '1450137600000', 'unix remains unchanged')
})

test('utc timestamp returns correct results', t => {
  t.plan(2)
  const actual = convertString('2015-12-25')
  t.deepEqual(actual.utc, 'Fri, 25 Dec 2015 00:00:00 GMT', 'utc is returned correctly')
  t.deepEqual(actual.unix, '1451001600000', 'unix is return correctly')
})

test('empty string returns current time', t => {
  t.plan(2)
  const actual = convertString('')
  t.deepEqual(actual.utc, new Date().toUTCString(), 'utc is set correctly')
  t.deepEqual(actual.unix, new Date().getTime().toString(), 'unix is set correctly')
})
