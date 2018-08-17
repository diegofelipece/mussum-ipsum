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

###Options###

Key | Type | Default | Description
--- | --- | --- | ---
pNum | Number | 1 | Number of paragraphs requested
quotes | Array | mussumQuotes | Array of quotes to generate paragraphs
mainQuote | String | mussumMainQuote | Main quote to start your "Lorem Ipsum"
genLimit | Number | 1000 | Limit of paragraphs that can be requested
resultType | String | 'html'| Format of the response, choose between: 'html' or 'text'
tagBefore | String | '<p>' | Anything you want to put before each paragraph
tagAfter | String | '</p>' | Anything you want to put after each paragraph
pQuotes | Number | 4 | Number of quotes used to build a paragraph

The options can be set on an object passed as a parameter, like the example above:

``` javascript
mIpsum({
  pNum: 1,
  quotes: mussumQuotes,
  mainQuote: mussumMainQuote,
  genLimit: 1000,
  resultType: 'html',
  tagBefore: '<p>',
  tagAfter: '</p>',
  pQuotes: 4
);
```

____

## Related Projects

[Mussum Ipsum REST API](https://github.com/wilkerHop/mussum-ipsum-api)

____

Created by [Diego Esteves](http://diegoesteves.ink) under The MIT License (MIT)
