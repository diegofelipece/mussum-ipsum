/* ---------------
mipsum.js v2.0.4
--------------- */
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

var mIpsum = function( pNum = 1, quotes = mussumQuotes, maxOfp = 9999){
  /* Function to sort a number
  ----------------- > */
  var n, min = 1, max;
  var getRandomNumber = function(min, max) {
    n = Math.random() * (max - min) + min;
    return Math.round(n) -1; // 1 less of the total arrays to adjust with the array index
  };

  /*  create
  ----------------- > */
  var createParagraphs = function(pNum, quotes) {

    var paragraphs = [];

    function generateOriginalParagraphs() {
      // It makes 10 paragraphs
      // console.log(quotes);
      var tempQuotes = quotes.slice();
      // console.log(tempQuotes);
      for (var y = 0; y < limit; y++){
        // 1 paragraph == 4 quotes
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
            // console.log(tempParagraph);
            break;
          }
        }
      }
    }

    var quotesLength = quotes.length;
    var limit = Math.floor(quotesLength/4);

    //quantas vezes vai rodar depende do limite
    if ( pNum <= limit) {
      // console.log('só precisa rodar uma vez');
      generateOriginalParagraphs(quotes, limit);
    } else {
      var v = Math.ceil(pNum/limit);
      // console.log('precisa rodar ' + v + ' vezes' );
      for (var i = 0; i < v; i++) {
        generateOriginalParagraphs(quotes, limit);
      }
    }

    return paragraphs;
  };

  /*  show
  ----------------- > */
  if (pNum <= maxOfp) {
    var result = "";
    var paragraphs = createParagraphs(pNum, quotes);

    for (var i = 0; i < pNum; i++) {
      if (i === 0) {
        result += "Mussum Ipsum, cacilds vidis litro abertis. ";
      }
      result += paragraphs[i];
    }

    return result;

  } else {
    console.error('I guess this is too much!');
  }
};

window.mIpsum = mIpsum;
