import MussumIpsum from './mipsum-core'
export const mIpsum = (options) => new MussumIpsum(options).init()
window.mIpsum = mIpsum