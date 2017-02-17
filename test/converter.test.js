var test = require('tape');
var convertString = require('../converter');

test('short string of numbers returns null values', function (t) {
    var result = convertString('1');
    t.ok({unix: null, natural: null}, result);
    t.end();
});

test('random string of letters returns null values', function(t) {
    var result = convertString('hi');
    t.ok({unix: null, natural: null}, result);
    t.end();
});

test('unix timestamp produces correct results', function(t) {
    var result = convertString('1450072800');
    t.ok(1450072800, result.unix, 'timestamp remands unchanged');
    t.ok({unix: 1450072800, natural: 'December 14, 2015'}, 'json is correct (CST)');
    t.end();
});

test('natural date produces correct results', function(t) {
    var result = convertString('December 14, 2015');
    t.ok('December 14, 2015', result.natural, 'natural date remands unchanged');
    t.ok({unix: 1450072800, natural: 'December 14, 2015'}, 'json is correct (CST)');
    t.end();
})