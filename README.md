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

var patch = glue(document.body, '<h1 class="now"></h1>', function () {
  return {
      '.now': time('{hours}:{minutes}:{seconds}')
  }
})

setInterval(patch, 1000)
```
