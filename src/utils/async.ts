import { config } from '~/config'

export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms * config.timeCoeff))
