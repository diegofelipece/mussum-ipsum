import { MussumIpsumOptions } from '../types/MussumIpsumOptions'
import { mussumMainQuote, mussumQuotes } from './quotes'

export const defaultOptions: MussumIpsumOptions = {
  pNum: 1,
  quotes: mussumQuotes,
  mainQuote: mussumMainQuote,
  genLimit: 1000,
  resultType: 'html',
  tagBefore: '<p>',
  tagAfter: '</p>',
  pQuotes: 4,
}