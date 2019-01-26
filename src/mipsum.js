/* ---------------
mipsum.js v2.2.2
--------------- */
const mussumMainQuote = "Mussum Ipsum, cacilds vidis litro abertis.";
const mussumQuotes = [
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
  "Viva forevis aptent taciti sociosqu ad litora torquent.",
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
  "A ordem dos tratoris não altera o pão duris.",
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
  "Nec orci ornare consequat. Praesent lacinia ultricis consectetur. Sed non ipsum felis.",
  "Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
  "Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.",
  "Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.",
  "Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.",
  "Etiam mattis velit gravidis liberis lobortis dictum non forevis.",
  "Morbis dictuns di volutpatis mollis." ,
  "Mauris loboris nun gostis, prefiris cachacis."
];

var mIpsum = function(options){
  const defaults = {
    pNum: 1, //number of paragraphs requested
    quotes: mussumQuotes, //array of quotes to generate paragraphs
    mainQuote: mussumMainQuote, //main quote to start your "Lorem Ipsum"
    genLimit: 1000, //limit of paragraphs that can be requested
    resultType: 'html', //format of the response: html or text
    tagBefore: '<p>', //anything you want to put before each paragraph
    tagAfter: '</p>', //anything you want to put after each paragraph
    pQuotes: 4 //number of quotes used to build a paragraph
  };

  /* Define options ---- > */
  let opt = JSON.parse(JSON.stringify(defaults));
  if (options) {
    Object.keys(options).forEach(option => opt[option] = options[option]);
    let error = errorHandler(opt);
    if (error){
      throw new Error(error);
    }
  }

  /* Create ---- > */
  function createParagraphs(opt) {
    let paragraphs = [];
    let limit = Math.floor(opt.quotes.length/opt.pQuotes);
    let roundsNeeded = Math.ceil(opt.pNum/limit);

    let tempParagraphs = [];
    for (let i = 0; i < roundsNeeded*limit; i++) {
      tempParagraphs.push(createOneParagraph(opt));
    }

    tempParagraphs.forEach((paragraph, i) => { if (opt.pNum > i) paragraphs.push(paragraph)});
    return paragraphs;
  };

  function createOneParagraph(opt){

    let singleParagraph = '';
    var tempQuotes = [].concat(opt.quotes);
    var randomLimit = tempQuotes.length;

    for (var i = 0; i < opt.pQuotes; i++) {

      let thisPosition = Math.round(Math.random() * (randomLimit - 1) + 1) -1; //get a random position
      singleParagraph += `${tempQuotes[thisPosition]} `;// append the quote on a temp string
      tempQuotes.splice(thisPosition, 1); //exlude the used value for the array
      randomLimit --; //decrease max getRandomNumber
    }
    return singleParagraph;
  };

  /* Generate view ---- > */
  function generateView(paragraphs){
    let view = '';
    paragraphs[0] = `${opt.mainQuote} ${paragraphs[0]}`; // add the initial quote

    paragraphs.forEach((paragraph, index) => {
      if (opt.resultType === 'html') {
        view += `${opt.tagBefore}${paragraph} ${opt.tagAfter}`;
      } else{
        view += `${paragraph} \n\n`;
      }
    });

    return view;
  };

  return generateView(createParagraphs(opt));
};

let errorHandler = function(opt){
  if (opt.pNum <= 0 || !opt.pNum === '') {
    return `Is not possible to create 0 paragraphs.`;
  }
  if (opt.pNum > opt.genLimit) {
    return `Your request of ${opt.pNum} paragraphs, is larger than the defined limit: ${opt.genLimit}. You can change that limit using the key 'genLimit' on your options object.`;
  }
  if (opt.quotes.length < opt.pQuotes) {
    return `Your array have only ${opt.quotes.length} quotes, you need at least ${opt.pQuotes} quotes to have results.`;
  }
  if (!opt.resultType === 'html' || !opt.resultType === 'text') {
    return `The value '${opt.resultType}' given to 'resultType' is not accepted. Choose between: html or text.`;
  }
};

window.mIpsum = mIpsum;
