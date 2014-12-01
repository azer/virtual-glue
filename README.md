## virtual-glue

Render HTML with [Hyperglue](http://github.com/substack/hyperglue) and [VirtualDOM](http://npmjs.org/virtual-dom)

## Install

```bash
$ npm install virtual-glue
```

## Usage Example

A simple clock app:

```js
var glue = require('virtual-glue')
var time = require('format-date')

var patch = glue(document.body, '<h1 class="clock"></h1>', function () {
  return {
      '.now': time('{hours}:{minutes}:{seconds}')
  }
})

setInterval(patch, 1000)
```

On server-side (a.k.a one-time render)

```js
var glue = require('virtual-glue')
var time = require('format-date')

var html = glue('<h1 class="now"></h1>', {
  '.now': time('{hours}:{minutes}:{seconds}')
})

html
// => <h1 class="clock">15:03:17</h1>
```
