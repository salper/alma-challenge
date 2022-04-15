import crypto from 'crypto'
import assert from 'assert'
import { log as _log } from '~/utils/logger'

export type Robot = {
  id: string
  state:
    | 'ASSEMBLING'
    | 'BUYING'
    | 'DEACTIVATED'
    | 'IDLE'
    | 'MINING'
    | 'MOVING'
    | 'SELLING'
}
const MAX_CAPACITY = 30

const state: Robot[] = []

export const count = () => state.length

export const create = (): Robot => {
  assert(state.length <= MAX_CAPACITY, 'State has reached max capacity')

  return state[
    state.push({
      id: crypto.randomUUID(),
      state: 'IDLE',
    }) - 1
  ]
}

export const hasReachedMaxCapacity = () => state.length >= MAX_CAPACITY

export const log = (robot: Robot, msg: string) =>
  _log(`robot ${robot.id} ${msg}`)
