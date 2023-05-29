import { mIpsum } from "."
import { MussumIpsumOptions } from "./@types/MussumIpsumOptions"

declare global {
  interface Window { mIpsum: (options: MussumIpsumOptions) => string | string[]; }
}

window.mIpsum = mIpsum