import type { Robot } from '~/models/robot'

export const log = (msg: string) => {
  console.log(`[${new Date().toISOString()}] ${msg}`)
}
