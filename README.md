# mIpsum v2.2.2

This is a Javascript Lorem Ipsum generator, created for [mussumipsum.com](http://mussumipsum.com), a brasilian dummy text generator. You can use it to develop anything that concern Mussum Ipsum (like a plugin for Sublime or Atom or whatever), or to create your own customized Lorem Ipsum.

____

Add it to your project using **Bower** or just download the code.

``` bash
bower install mipsum --save
```

Just add **mipsum.min.js** to your project and add a call via JS.

``` html
<script src="path/to/mipsum.min.js"></script>
```

mIpsum was created using plane Javascript (ES2015 and beyond), to allow you to decide if you want to include it in any context, even jQuery for example:

``` javascript
$(function(){
  var mussumIpsum = mIpsum({pNum: 10}); //How many paragraphs do you want
  $('body').append('<div id="mussum-ipsum">'+mussumIpsum+'</div>');
  // This will add to the body of the documment a div with 10 paragraphs.
});
```

There are another customized options to you. More examples at **demo/index.html**

Options (with defaults to exemplify):
``` javascript
mIpsum({
  pNum: 1, //number of paragraphs requested
  quotes: mussumQuotes, //array of quotes to generate paragraphs
  mainQuote: mussumMainQuote, //main quote to start your "Lorem Ipsum"
  genLimit: 1000, //limit of paragraphs that can be requested
  resultType: 'html', //format of the response: html or text
  tagBefore: '<p>', //anything you want to put before each paragraph
  tagAfter: '</p>', //anything you want to put after each paragraph
  pQuotes: 4 //number of quotes used to build a paragraph
);
```
____

## Related Projects

[Mussum Ipsum REST API](https://github.com/wilkerHop/mussum-ipsum-api)

____

Created by [Diego Esteves](http://diegoesteves.ink) under The MIT License (MIT)
