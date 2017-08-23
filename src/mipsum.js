/* ---------------
mipsum.js v2.1.1
--------------- */
var mussumMainQuote = "Mussum Ipsum, cacilds vidis litro abertis.";
var mussumQuotes = [
  "Pra lá , depois divoltis porris, paradis.",
  "Paisis, filhis, espiritis santis.",
  "Mé faiz elementum girarzis, nisi eros vermeio.",
  "Manduma pindureta quium dia nois paga.",
  "Sapien in monti palavris qui num significa nadis i pareci latim.",
  "Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
  "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.",
  "Interagi no mé, cursus quis, vehicula ac nisi.",
  "Casamentiss faiz malandris se pirulitá.",
  "Cevadis im ampola pa arma uma pindureta.",
  "Atirei o pau no gatis, per gatis num morreus.",
  "Viva Forevis aptent taciti sociosqu ad litora torquent.",
  "Copo furadis é disculpa de bebadis, arcu quam euismod magna.",
  "Delegadis gente finis, bibendum egestas augue arcu ut est.",
  "In elementis mé pra quem é amistosis quis leo.",
  "Não sou faixa preta cumpadi, sou preto inteiris, inteiris.",
  "Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
  "Suco de cevadiss deixa as pessoas mais interessantis.",
  "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.",
  "Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!",
  "Quem manda na minha terra sou euzis!",
  "Si num tem leite então bota uma pinga aí cumpadi!",
  "Diuretics paradis num copo é motivis de denguis.",
  "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.",
  "A ordem dos tratores não altera o pão duris.",
  "Quem num gosta di mim que vai caçá sua turmis!",
  "Quem num gosta di mé, boa gentis num é.",
  "Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!",
  "Per aumento de cachacis, eu reclamis.",
  "Detraxit consequat et quo num tendi nada.",
  "Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
  "Leite de capivaris, leite de mula manquis sem cabeça.",
  "Aenean aliquam molestie leo, vitae iaculis nisl.",
  "Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
  "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
  "Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
  "Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
  "Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
  "Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.",
  "Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum."
];

var mIpsum = function(options){
  const defaults = {
    pNum: 1,
    quotes: mussumQuotes,
    mainQuote: mussumMainQuote,
    maxOfp: 1000,
    resultType: 'html',
    tagBefore: '<p>',
    tagAfter: '</p>',
    quotesOnParagraph: 4
  };

  /* Define options
  ----------------- > */
  let $o = JSON.parse(JSON.stringify(defaults));
  if (options) {
    Object.keys(options).forEach(option => $o[option] = options[option]);
  }

  /* Create
  ----------------- > */
  var createParagraphs = function(pNum, quotes) {
    let limit = Math.floor($o.quotes.length/$o.quotesOnParagraph);
    let roundsNeeded = Math.ceil(pNum/limit);

    let tempParagraphs = [];
    for (var i = 0; i < roundsNeeded; i++) {
      for (let i = 0; i < limit; i++) {
        tempParagraphs.push(createOneParagraph($o.quotes));
      }
    }

    let paragraphs = [];
    tempParagraphs.forEach((paragraph, i)=>{
      if (pNum > i) {
        paragraphs.push(paragraph);
      }
    });

    function createOneParagraph(tempQuotes){

      let singleParagraph = '';
      var tempQuotes = [].concat($o.quotes);
      var randomLimit = tempQuotes.length;

      for (var i = 0; i < $o.quotesOnParagraph; i++) {

        let thisPosition = Math.round(Math.random() * (randomLimit - 1) + 1) -1; //get a random position
        singleParagraph += `${tempQuotes[thisPosition]} `;// append the quote on a temp string
        tempQuotes.splice(thisPosition, 1); //exlude the used value for the array
        randomLimit --; //decrease max getRandomNumber
      }
      return singleParagraph;
    }

    return paragraphs;
  };

  /* Generate view
  ----------------- > */
  function generateView(paragraphs){
    let view = '';

    function useHtml(){
      if ($o.resultType === 'html') return true;
    };

    paragraphs[0] = `${$o.mainQuote} ${paragraphs[0]}`; // add the initial quote

    paragraphs.forEach((paragraph, index) => {

      if (useHtml()) {
        view += `${$o.tagBefore}${paragraph} ${$o.tagAfter}`;
      } else{
        view += `${paragraph} \n\n`;
      }

    });

    return view;
  };

  if (errorHandler()) {
    return generateView(createParagraphs($o.pNum, $o.quotes));
  }

  function errorHandler(){
    if ($o.pNum <= $o.maxOfp) {
      if ($o.quotes.length >= $o.quotesOnParagraph) {

        if ($o.resultType === 'html' || $o.resultType === 'text') {

          return true;
        } else{
          throw new Error(`The value '${$o.resultType}' given to 'resultType' is not accepted. Choose between: html or text.`);
          return false;
        }
      } else{
        throw new Error(`Your array have only ${$o.quotes.length} quotes, you need at least ${$o.quotesOnParagraph} quotes to have results.`);
        return false;
      }
    } else{
      throw new Error(`Your request of ${$o.pNum} paragraphs, is larger than the defined limit: ${$o.maxOfp}. You can change that limit using the key 'maxOfp' on your options object.`);
      return false;
    }
  };
};

window.mIpsum = mIpsum;
