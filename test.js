var glue = require('./');
var time = require('format-date');
var test = require("prova");

document.body.innerHTML = '';

test('simple clock', function (t) {
  t.plan(2);

  var patch = glue(document.body, '<h1 class="now"></h1>', function () {
    return {
      '.now': time('{hours}:{minutes}:{seconds}')
    };
  });

  assert();

  setTimeout(function () {
    patch();
    assert();
  }, 1000);

  function assert () {
    t.equal(document.body.innerHTML.trim(), '<h1 class="now">' + time('{hours}:{minutes}:{seconds}') + '</h1>');
  }

});
