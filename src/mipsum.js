/* ---------------
mipsum.js v2.1.1
--------------- */
var mussumMainQuote = "Mussum Ipsum, cacilds vidis litro abertis. ";
var mussumQuotes = [
  "Pra lá , depois divoltis porris, paradis. ",
  "Paisis, filhis, espiritis santis. ",
  "Mé faiz elementum girarzis, nisi eros vermeio. ",
  "Manduma pindureta quium dia nois paga. ",
  "Sapien in monti palavris qui num significa nadis i pareci latim. ",
  "Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
  "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. ",
  "Interagi no mé, cursus quis, vehicula ac nisi. ",
  "Casamentiss faiz malandris se pirulitá.",
  "Cevadis im ampola pa arma uma pindureta. ",
  "Atirei o pau no gatis, per gatis num morreus. ",
  "Viva Forevis aptent taciti sociosqu ad litora torquent. ",
  "Copo furadis é disculpa de bebadis, arcu quam euismod magna. ",
  "Delegadis gente finis, bibendum egestas augue arcu ut est. ",
  "In elementis mé pra quem é amistosis quis leo. ",
  "Não sou faixa preta cumpadi, sou preto inteiris, inteiris. ",
  "Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. ",
  "Suco de cevadiss deixa as pessoas mais interessantis. ",
  "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. ",
  "Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! ",
  "Quem manda na minha terra sou euzis! ",
  "Si num tem leite então bota uma pinga aí cumpadi! ",
  "Diuretics paradis num copo é motivis de denguis. ",
  "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. ",
  "A ordem dos tratores não altera o pão duris. ",
  "Quem num gosta di mim que vai caçá sua turmis! ",
  "Quem num gosta di mé, boa gentis num é. ",
  "Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ",
  "Per aumento de cachacis, eu reclamis. ",
  "Detraxit consequat et quo num tendi nada. ",
  "Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. ",
  "Leite de capivaris, leite de mula manquis sem cabeça. ",
  "Aenean aliquam molestie leo, vitae iaculis nisl. ",
  "Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. ",
  "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. ",
  "Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. ",
  "Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. ",
  "Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. ",
  "Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. ",
  "Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. "
];

var mIpsum = function(options){
  var defaults = {
    pNum: 1,
    quotes: mussumQuotes,
    mainQuote: mussumMainQuote,
    maxOfp: 9999,
    resultType: 'html',
    tagBefore: '<p>',
    tagAfter: '</p>',
  };

  var extend = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i])
        continue;
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
      }
    }
    return out;
  };

  var $o = extend({}, defaults, options);
  var pNum = $o.pNum,
      quotes = $o.quotes,
      mainQuote = $o.mainQuote,
      maxOfp = $o.maxOfp,
      resultType = $o.resultType,
      tagBefore = $o.tagBefore,
      tagAfter = $o.tagAfter;

  /* Function to sort a number
  ----------------- > */
  var n, min = 1, max;
  var getRandomNumber = function(min, max) {
    n = Math.random() * (max - min) + min;
    return Math.round(n) -1; // 1 less of the total arrays to adjust with the array index
  };

  /*  create
  ----------------- > */
  var quotesLength = quotes.length,
      limit = Math.floor(quotesLength/4),
      createParagraphs = function(pNum, quotes) {

    var paragraphs = [];

    function generateOriginalParagraphs() {
      // It makes 10 paragraphs
      // console.log(quotes);
      var tempQuotes = quotes.slice();
      // console.log(tempQuotes);
      for (var y = 0; y < limit; y++){
        // 1 paragraph == 4 quotes
        var tempQuotesLength = tempQuotes.length;
        for (var i = 0, tempParagraph = ""; i < 4; i++){
          // sort function
          var randomResult = getRandomNumber(min, tempQuotes.length);

          var q = tempQuotes[randomResult];
          tempParagraph += q + " "; // append the quote on a temp string
          tempQuotes.splice(randomResult, 1); //exlude the used value for the array
          max --; //decrease max getRandomNumber

          if (i==3) {
            // Push the the tem string to the paragraphs array
            paragraphs.push(tempParagraph);
            break;
          }
        }
      }
    }

    // using the "limit" to define how many times we need to generate new ones.
    if ( pNum <= limit) {
      // console.log('-- junt once');
      generateOriginalParagraphs(quotes, limit);
    } else {
      var v = Math.ceil(pNum/limit);
      // console.log('-- run ' + v + ' times' );
      for (var i = 0; i < v; i++) {
        generateOriginalParagraphs(quotes, limit);
      }
    }
    return paragraphs;
  };

  /*  show
  ----------------- > */
  if (pNum <= maxOfp) {
    if (quotesLength >= 4) {
      var result = "";
      var paragraphs = createParagraphs(pNum, quotes);

      // eliminate the excedents paragraphs to return the right number
      for (var i = 0; i < pNum; i++) {

        if (resultType === 'html') {
          // tags on the paragraph
          result += tagBefore;
          if (i === 0) {
            result += mainQuote;
          }
          result += paragraphs[i]+tagAfter;

        } else if(resultType === 'text'){
          // only a break of line
          if (i === 0) {
            result += mainQuote;
          }
          result += paragraphs[i]+'\n\n';

        } else{
          console.error('Error.');
        }

      }

      return result;

    } else{
      var err = "Error! You need at least 4 quotes on the pointed array.";
      console.error(err);
    }
  } else {
    console.error('I guess this is too much!');
  }
};

window.mIpsum = mIpsum;
