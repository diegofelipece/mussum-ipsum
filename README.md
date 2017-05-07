# mIpsum v2.0.6

This is a Javascript lorem ipsum generator, created for [mussumipsum.com](http://mussumipsum.com), a brasilian dummy text generator.

____

Add using Bower or just download the project.

```
bower install mipsum --save-dev
```

Just add mipsum.min.js to your project and manipulate it via JS. See a basic exemple using jQuery:

```

$(function(){
  var mussumIpsum = window.mIpsum(10); //How many paragraphs do you want
  $('body').append('<div id="mussum-ipsum">'+mussumIpsum+'</div>');
  // This will add to thw body of the documment a div with 10 paragraphs. 
});

```

I'm working on improove the custom mode, where you will be able to change default quotes for yours.

____

Created by Diego Esteves under The MIT License (MIT)

Copyright © 2016 Diego Esteves <diegofelipece@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
