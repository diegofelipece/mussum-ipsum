import { mussumQuotes, mussumMainQuote } from './lib/quotes'

class MussumIpsum {
  constructor (options) {
    this._userOptions = options;
    this._defaults = {
      pNum: 1, //number of paragraphs requested
      quotes: mussumQuotes, //array of quotes to generate paragraphs
      mainQuote: mussumMainQuote, //main quote to start your "Lorem Ipsum"
      genLimit: 1000, //limit of paragraphs that can be requested
      resultType: 'html', //format of the response: html or text
      tagBefore: '<p>', //anything you want to put before each paragraph
      tagAfter: '</p>', //anything you want to put after each paragraph
      pQuotes: 4 //number of quotes used to build a paragraph
    }
  }

  /* Create ---- > */
  createParagraphs() {
    const { _options: options } = this;

    let paragraphs = [];
    let limit = Math.floor(options.quotes.length/options.pQuotes);
    let roundsNeeded = Math.ceil(options.pNum/limit);

    let tempParagraphs = [];
    for (let i = 0; i < roundsNeeded*limit; i++) {
      tempParagraphs.push(this.createOneParagraph());
    }

    tempParagraphs.forEach((paragraph, i) => { if (options.pNum > i) paragraphs.push(paragraph)});
    return paragraphs;
  }

  createOneParagraph(){
    const { _options: options } = this;

    let singleParagraph = '';
    let tempQuotes = [].concat(options.quotes);
    let randomLimit = tempQuotes.length;

    for (var i = 0; i < options.pQuotes; i++) {

      let thisPosition = Math.round(Math.random() * (randomLimit - 1) + 1) -1; //get a random position
      singleParagraph += `${tempQuotes[thisPosition]} `;// append the quote on a temp string
      tempQuotes.splice(thisPosition, 1); //exlude the used value for the array
      randomLimit --; //decrease max getRandomNumber
    }
    return singleParagraph;
  }

  /* Generate view ---- > */
  generateView(paragraphs){
    const { _options: options } = this;

    let view = '';
    paragraphs[0] = `${options.mainQuote} ${paragraphs[0]}`; // add the initial quote

    paragraphs.forEach((paragraph, index) => {
      if (options.resultType === 'html') {
        view += `${options.tagBefore}${paragraph} ${options.tagAfter}`;
      } else{
        view += `${paragraph} \n\n`;
      }
    });

    return view;
  };

  errorHandler(opt){
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
  }

  init(){
    /* Define options ---- > */
    this._options = JSON.parse(JSON.stringify(this._defaults));
    if (this._userOptions) {
      Object.keys(this._userOptions).forEach(option => this._options[option] = this._userOptions[option]);
      const error = this.errorHandler(this._options);
      if (error){
        throw new Error(error);
      }
    }

    return this.generateView(this.createParagraphs());
  }
}

const mIpsum = options => new MussumIpsum(options).init();
window.mIpsum = mIpsum;
