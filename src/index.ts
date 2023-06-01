import { MussumIpsumOptions } from './types/MussumIpsumOptions'
import { defaultOptions } from './lib/defaultOptions'
import MussumIpsum from './lib/mipsum-core'

const mIpsum = (options: MussumIpsumOptions) => {
  const finalOptions: MussumIpsumOptions = {
    ...defaultOptions,
    ...options,
  }
  return new MussumIpsum(finalOptions).run()
}

export {
  MussumIpsum,
  mIpsum,
  defaultOptions,
}