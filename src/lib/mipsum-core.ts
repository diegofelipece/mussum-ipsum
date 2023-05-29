import { MussumIpsumOptions } from '../@types/MussumIpsumOptions'

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
  };

  constructor(options: MussumIpsumOptions) {
    if (options) {
      this._options = {...this._options, ...options}        
      const error = this.errorHandler()
      if (error) throw new Error(error)
    }
  }

  /** Create */
  createParagraphs(): string[] {
    const { _options: options } = this

    const paragraphs: string[] = []
    const limit = Math.floor(options.quotes.length / options.pQuotes)
    const roundsNeeded = Math.ceil(options.pNum / limit)
    const tempParagraphs = []
    for (let i = 0; i < (roundsNeeded * limit); i++) {
      tempParagraphs.push(this.createOneParagraph())
    }

    tempParagraphs.forEach((paragraph, i) => (options.pNum > i) && paragraphs.push(paragraph))
    return paragraphs
  }

  createOneParagraph(): string {
    const { _options: options } = this

    const singleParagraph = []
    const tempQuotes = [...options.quotes]
    let randomLimit = tempQuotes.length

    for (let i = 0; i < options.pQuotes; i++) {
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
    const { _options: options } = this
    const paragraphs = recievedParagraphs    

    // add the initial quote
    paragraphs[0] = `${options.mainQuote} ${paragraphs[0]}`
    
    const final = (options.resultType === 'array')
      ? paragraphs
      : paragraphs.reduce((prev, paragraph) => {

        return(options.resultType === 'html')
          ? `${prev}${options.tagBefore}${paragraph}${options.tagAfter}`
          : `${prev}${paragraph}\n\n`
      }, '')

    return final
  }

  errorHandler() {
    const { _options: options } = this

    if (options.pNum <= 0 || !options.pNum) {
      return 'Is not possible to create 0 paragraphs.'
    }
    if (options.pNum > options.genLimit) {
      return `Your request of ${options.pNum} paragraphs, is larger than the defined limit: ${options.genLimit}. You can change that limit using the key 'genLimit' on your options object.`
    }
    if (options.quotes.length < options.pQuotes) {
      return `Your array have only ${options.quotes.length} quotes, you need at least ${options.pQuotes} quotes to have results.`
    }
    if (!['html', 'text', 'array'].includes(options.resultType)) {
      return `The value '${options.resultType}' given to 'resultType' is not accepted. Choose between: html or text.`
    }

    return false
  }

  run() {
    const paragraphs = this.createParagraphs()
    return this.format(paragraphs)
  }
}

export default MussumIpsum
