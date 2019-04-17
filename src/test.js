var test = require('tape');
var autocompleteApp = require('./main.js');
test('Tape is working', function(t) {

  t.equal(1, 1, 'Should return 1 when given 1');
  t.end();
});


test ('searchBox returns a string', function(t){
  var actual = typeof ("Mam");
  var expected = 'string';
  t.equal(actual, expected, 'Should return sring when given string');
  t.end();
});
