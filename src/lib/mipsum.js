import { mussumQuotes, mussumMainQuote } from './quotes'

export class MussumIpsum {
  constructor (options) {
    this._userOptions = options;
    this._defaults = {
      pNum: 1,
      quotes: mussumQuotes,
      mainQuote: mussumMainQuote,
      genLimit: 1000,
      resultType: 'html',
      tagBefore: '<p>',
      tagAfter: '</p>',
      pQuotes: 4,
    }
  }

  /* Create ---- > */
  createParagraphs() {
    const { _options: options } = this;

    let paragraphs = [];
    const limit = Math.floor(options.quotes.length/options.pQuotes);
    const roundsNeeded = Math.ceil(options.pNum/limit);

    let tempParagraphs = [];
    for (let i = 0; i < (roundsNeeded * limit); i++) {
      tempParagraphs.push(this.createOneParagraph());
    }

    tempParagraphs.forEach((paragraph, i) => { if (options.pNum > i) paragraphs.push(paragraph)});
    return paragraphs;
  }

  createOneParagraph(){
    const { _options: options } = this;

    let singleParagraph = '';
    let tempQuotes = [ ...options.quotes ];
    let randomLimit = tempQuotes.length;

    for (let i = 0; i < options.pQuotes; i++) {
      const thisPosition = Math.round(Math.random() * (randomLimit - 1) + 1) -1; //get a random position
      singleParagraph += `${tempQuotes[thisPosition]} `; // append the quote on a temp string
      tempQuotes.splice(thisPosition, 1); //exlude the used value for the array
      randomLimit --; //decrease max getRandomNumber
    }

    return singleParagraph;
  }

  /* Format response ---- > */
  format(paragraphs){
    const { _options: options } = this;

    let response = '';
    paragraphs[0] = `${options.mainQuote} ${paragraphs[0]}`; // add the initial quote

    paragraphs.forEach((paragraph, index) => {
      response += (options.resultType === 'html') ? `${options.tagBefore}${paragraph}${options.tagAfter}` : `${paragraph} \n\n`;
    });

    return response;
  };

  errorHandler(){
    const { _options: options } = this;

    if (options.pNum <= 0 || !options.pNum === '') {
      return `Is not possible to create 0 paragraphs.`;
    }
    if (options.pNum > options.genLimit) {
      return `Your request of ${options.pNum} paragraphs, is larger than the defined limit: ${options.genLimit}. You can change that limit using the key 'genLimit' on your options object.`;
    }
    if (options.quotes.length < options.pQuotes) {
      return `Your array have only ${options.quotes.length} quotes, you need at least ${options.pQuotes} quotes to have results.`;
    }
    if (!options.resultType === 'html' || !options.resultType === 'text') {
      return `The value '${opt.resultType}' given to 'resultType' is not accepted. Choose between: html or text.`;
    }
  }

  init(){
    /* Define options ---- > */
    this._options = { ...this._defaults };

    if (this._userOptions) {
      Object.keys(this._userOptions).forEach(option => this._options[option] = this._userOptions[option]);

      const error = this.errorHandler();
      if (error) throw new Error(error);
    }

    const paragraphs = this.createParagraphs();
    return this.format(paragraphs);
  }
}

export const mIpsum = options => new MussumIpsum(options).init();
window.mIpsum = mIpsum;
