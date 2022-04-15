import assert from 'assert'
import crypto from 'crypto'
import type { Bar } from '~/models/bar'
import type { Foo } from '~/models/Foo'

export type FooBar = {
  bar: Bar
  id: string
  foo: Foo
}

const SALE_MAX_CAPACITY = 5

const state: FooBar[] = []

export const canSell = () => state.length >= SALE_MAX_CAPACITY

export const count = () => state.length

export const create = (bar: Bar, foo: Foo): FooBar => {
  if (crypto.randomInt(1, 11) > 6) {
    throw new Error('Creation failed (60% chance of success)')
  }

  return state[
    state.push({
      bar,
      id: crypto.randomUUID(),
      foo,
    }) - 1
  ]
}

export const sell = (n = SALE_MAX_CAPACITY) => {
  assert(
    n >= 1 && n <= SALE_MAX_CAPACITY,
    `Invalid argument. Expected 1 <= n <= ${SALE_MAX_CAPACITY}, got ${n}`
  )

  assert(
    state.length >= n,
    `Insufficient found. Expected >= ${n}, got ${state.length}`
  )

  state.splice(0, n)
}
