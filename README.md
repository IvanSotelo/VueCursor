# vue-cursor

> Vue.js component


<a target="_blank" href="https://travis-ci.org/IvanSotelo/VueCursor"><img src="https://travis-ci.org/IvanSotelo/VueCursor.svg?branch=master"></a>

## Installation

``` bash
$ npm install --save vue-cursor
```


## Usage

``` vue
<template>
  <div class="app">
    <a href="#" data-hover>Link</a>
    <vue-cursor/>
  </div>
</template>

<script>
  import VueCursor from 'vue-cursor';
  export default {
    name: 'demo',
    components: {
      VueCursor
    }
  };
</script>
```

## Properties

* `blend-mode` **[String]**

  Optional; `difference` by defualt. The blend mode.


## License

```
The MIT License (MIT)

Copyright (c) 2017 Ivan Sotelo Vargas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
