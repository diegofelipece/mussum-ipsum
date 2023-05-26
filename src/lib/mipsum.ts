import { MussumIpsumOptions } from '../../@types/MussumIpsumOptions'
import MussumIpsum from './mipsum-core'

export const mIpsum = (options: MussumIpsumOptions) => new MussumIpsum(options).init()