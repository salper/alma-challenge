import assert from 'assert'
import crypto from 'crypto'

export type Foo = {
  id: string
}

const ROBOT_PRICE = 6

const state: Foo[] = []

export const buyRobot = () => {
  assert(
    state.length >= ROBOT_PRICE,
    `Insufficient found. Expected >= ${ROBOT_PRICE}, got ${state.length}`
  )

  state.splice(0, ROBOT_PRICE)
}

export const canBuyRobot = () => state.length >= ROBOT_PRICE

export const count = () => state.length

export const create = (): Foo =>
  state[
    state.push({
      id: crypto.randomUUID(),
    }) - 1
  ]

export const pop = (): Foo => {
  assert(state.length, `Insufficient funds. Expected >= 1, got ${state.length}`)

  return state.pop()
}
