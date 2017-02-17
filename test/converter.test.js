var test = require('tape');
var convertString = require('../converter');

test('short string of numbers returns null values', function (t) {
    t.plan(2);
    t.deepEqual(convertString('1'),{unix: null, natural: null}, '"1" --> null');
    t.deepEqual(convertString('987'),{unix: null, natural: null}, '"987" --> null');
});

test('random string of letters returns null values', function(t) {
    t.plan(1);
    t.deepEqual(convertString('hi'), {unix: null, natural: null}, 'hi --> null value');
});

test('unix timestamp produces correct results', function(t) {
    t.plan(2);
    const actual = convertString('1450072800');
    t.deepEqual(actual.unix, 1450072800, 'timestamp remands unchanged');
    t.deepEqual(actual,{natural: 'December 14, 2015', unix: 1450072800}, 'json is correct (CST)');
});

test('natural date produces correct results', function(t) {
    t.plan(2);
    const actual = convertString('December 14, 2015');
    t.deepEqual(actual.natural,'December 14, 2015', 'natural date remands unchanged');
    t.deepEqual(actual,{unix: 1450072800, natural: 'December 14, 2015'}, 'json is correct (CST)');
});