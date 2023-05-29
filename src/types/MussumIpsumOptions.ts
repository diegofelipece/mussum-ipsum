export interface MussumIpsumOptions {
  pNum?: number;
  quotes?: string[];
  mainQuote?: string;
  genLimit?: number;
  resultType?: 'html'|'text'|'array';
  tagBefore?: string;
  tagAfter?: string;
  pQuotes?: number,
}