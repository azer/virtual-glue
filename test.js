var glue = require('./');
var time = require('format-date');
var test = require("prova");

document.body.innerHTML = '';

test('one time render for server-side', function (t) {
  t.plan(1);

  assert(t, glue('<h1 class="now"></h1>', {
    '.now': time('{hours}:{minutes}:{seconds}')
  }));
});

test('patching with virtual-dom for browsers', function (t) {
  t.plan(2);

  var patch = glue(document.body, '<h1 class="now"></h1>', function () {
    return {
      '.now': time('{hours}:{minutes}:{seconds}')
    };
  });

  assert(t, document.body.innerHTML);

  setTimeout(function () {
    patch();
    assert(t, document.body.innerHTML);
  }, 1000);
});

function assert (t, expected) {
  t.equal(expected.trim(), '<h1 class="now">' + time('{hours}:{minutes}:{seconds}') + '</h1>');
}
