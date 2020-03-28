# mIpsum

This is a Javascript Lorem Ipsum generator, created for [mussumipsum.com](http://mussumipsum.com), a brazilian dummy text generator. You can use it to develop anything that concerns Mussum Ipsum (like a plugin for Sublime or Atom or whatever), or to create your own customized Lorem Ipsum.

____

Add it to your project using **NPM**:

``` bash
npm install mipsum --save

```

**Yarn**:

``` bash
yarn add mipsum
```

Since `v2.3.2` it can be also imported as a module. Example:

``` javascript
import { mIpsum } from 'mipsum'

const myLoremIpsum = mIpsum({
  pNum: 1,
  resultType: 'text',
})
```

You can also just download the code, add **mipsum.min.js** to your project and call it on your JS.

``` html
<script src="path/to/mipsum.min.js"></script>
```

mIpsum was created using vanilla Javascript, to allow you to decide if you want to include it in any context, some use examples:

#### vanilla JS

``` javascript
const mussumIpsum = mIpsum({ pNum: 10 }); // Put how many paragraphs you want
document.querySelector('body').innerHtml = mussumIpsum;
```

#### the same thing with jQuery

``` javascript
const mussumIpsum = mIpsum({ pNum: 10 });
$('body').append(mussumIpsum);
```

There are other customized options available to you. More examples at **demo/index.html**

### Options

Key | Type | Default | Description
--- | --- | --- | ---
pNum | Number | `1` | Number of paragraphs requested
quotes | Array | `mussumQuotes` | Array of quotes to generate paragraphs
mainQuote | String | `mussumMainQuote` | Main quote to start your "Lorem Ipsum"
genLimit | Number | `1000` | Limit of paragraphs that can be requested
resultType | String | `html` | Format of the response, choose between: `html`, `text` or `array`
tagBefore | String | `<p>` | Anything you want to put before each paragraph (valid only with `html` resultType)
tagAfter | String | `</p>` | Anything you want to put after each paragraph (valid only with `html` resultType)
pQuotes | Number | `4` | Number of quotes used to build a paragraph

The options can be set on an object passed as a parameter, like the example below:

``` javascript
mIpsum({
  pNum: 1,
  quotes: [
    'Hi, my name is, what?',
    'My name is, who?',
    'Hi, my name is, huh?',
    'My name is, chka-chka',
  ],
  mainQuote: 'Slim Shady',
  genLimit: 1000,
  resultType: 'html',
  tagBefore: '<p>',
  tagAfter: '</p>',
  pQuotes: 4
});
```

___

## To contribute

Fork the repository, clone it on your local folder. Create your branch.

To start developing, just run `npm install` to install all packages, and then `npm start` should launch a live demo at your `http://localhost:8080`. 

____

## Related Projects

[Mussum Ipsum REST API](https://github.com/wilkerHop/mussum-ipsum-api)

____

Created by [Diego Esteves](http://diegoesteves.ink) under The MIT License (MIT)
