import crypto from 'crypto'
import assert from 'assert'

export type Bar = {
  id: string
}

const state: Bar[] = []

export const count = () => state.length

export const create = (): Bar =>
  state[
    state.push({
      id: crypto.randomUUID(),
    }) - 1
  ]

export const pop = (): Bar => {
  assert(state.length, `Insufficient funds. Expected >= 1, got ${state.length}`)

  return state.pop()
}

export const push = (bar: Bar) => {
  assert(
    state.every(({ id }) => bar.id !== id),
    `Duplicated ${bar.id} not allowed`
  )

  state.push(bar)
}
