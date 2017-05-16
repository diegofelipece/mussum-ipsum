# mIpsum v2.1.1

This is a Javascript Lorem Ipsum generator, created for [mussumipsum.com](http://mussumipsum.com), a brasilian dummy text generator. You can use it to develope anything that concern Mussum Ipsum (like a plugin for Sublime or Atom or whatever), or to create your own customized Lorem Ipsum.

____

Add it to your project using **Bower** or just download the code.

``` bash
bower install mipsum --save
```

Just add **mipsum.min.js** to your project and add a call via JS.

``` html
<script src="path/to/mipsum.min.js"></script>
```

mIpsum was created using plane Javascript (ES2015), to allow you to decide if you want to include it in any context, even jQuery for example:

``` javascript
$(function(){
  var mussumIpsum = window.mIpsum({pNum: 10}); //How many paragraphs do you want
  $('body').append('<div id="mussum-ipsum">'+mussumIpsum+'</div>');
  // This will add to thw body of the documment a div with 10 paragraphs. 
});
```

There are another customized options to you. More examples at **demo/index.html**

Options (with defaults to exemplify):
``` javascript
mIpsum({
  pNum: 1, //number of paragraphs
  quotes: mussumQuotes, //array with at least 4 quotes
  mainQuote: mussumMainQuote, //use it to add a initial string
  maxOfp: 9999, //define a limit of elements to be generated
  resultType: 'html', //html or text
  tagBefore: '<p>', //if you choose html, you can even change the tag after each paragraph
  tagAfter: '</p>', //and before
);
```

____

Created by Diego Esteves under The MIT License (MIT)

Copyright © 2016 Diego Esteves <diegofelipece@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
