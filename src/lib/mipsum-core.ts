import { MussumIpsumOptions } from '../types/MussumIpsumOptions'

class MussumIpsum {
  _options: MussumIpsumOptions = {
    pNum: 1,
    quotes: [],
    mainQuote: '',
    genLimit: 1000,
    resultType: 'html',
    tagBefore: '<p>',
    tagAfter: '</p>',
    pQuotes: 4,
  }

  constructor(options: MussumIpsumOptions) {
    if (options) {
      this._options = {...this._options, ...options}        
      const error = this.errorHandler()
      if (error) throw new Error(error)
    }
  }

  /** Create */
  createParagraphs(): string[] {
    const paragraphs: string[] = []
    const limit = Math.floor(this._options.quotes.length / this._options.pQuotes)
    const roundsNeeded = Math.ceil(this._options.pNum / limit)
    const tempParagraphs = []
    for (let i = 0; i < (roundsNeeded * limit); i++) {
      tempParagraphs.push(this.createOneParagraph())
    }

    tempParagraphs.forEach((paragraph, i) => (this._options.pNum > i) && paragraphs.push(paragraph))
    return paragraphs
  }

  createOneParagraph(): string {
    const singleParagraph = []
    const tempQuotes = [...this._options.quotes]
    let randomLimit = tempQuotes.length

    for (let i = 0; i < this._options.pQuotes; i++) {
      const thisPosition = (
        Math.round(Math.random() * (randomLimit - 1) + 1) - 1
      ) // get a random position
      singleParagraph.push(tempQuotes[thisPosition]) // append the quote on a temp string
      tempQuotes.splice(thisPosition, 1) // exlude the used value for the array
      randomLimit -= 1 // decrease max getRandomNumber
    }

    return singleParagraph.join(' ')
  }

  /** Format response */
  format(recievedParagraphs: string[]) {
    const paragraphs = recievedParagraphs    

    // add the initial quote
    paragraphs[0] = `${this._options.mainQuote} ${paragraphs[0]}`
    
    const final = (this._options.resultType === 'array')
      ? paragraphs
      : paragraphs.reduce((prev, paragraph) => {

        return(this._options.resultType === 'html')
          ? `${prev}${this._options.tagBefore}${paragraph}${this._options.tagAfter}`
          : `${prev}${paragraph}\n\n`
      }, '')

    return final
  }

  errorHandler() {
    if (this._options.pNum <= 0 || !this._options.pNum) {
      return 'Is not possible to create 0 paragraphs.'
    }
    if (this._options.pNum > this._options.genLimit) {
      return `Your request of ${this._options.pNum} paragraphs, is larger than the defined limit: ${this._options.genLimit}. You can change that limit using the key 'genLimit' on your options object.`
    }
    if (this._options.quotes.length < this._options.pQuotes) {
      return `Your array have only ${this._options.quotes.length} quotes, you need at least ${this._options.pQuotes} quotes to have results.`
    }
    if (!['html', 'text', 'array'].includes(this._options.resultType)) {
      return `The value '${this._options.resultType}' given to 'resultType' is not accepted. Choose between: html or text.`
    }

    return false
  }

  run() {
    const paragraphs = this.createParagraphs()
    return this.format(paragraphs)
  }
}

export default MussumIpsum
