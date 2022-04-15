import assert from 'assert'

const ROBOT_PRICE = 3

let state = 0

export const buyRobot = () => {
  assert(
    state >= ROBOT_PRICE,
    `Insufficient funds. Expected >= ${ROBOT_PRICE}, got ${state}`
  )

  state -= ROBOT_PRICE
}

export const canBuyRobot = () => state >= ROBOT_PRICE

export const count = () => state

export const sellFooBar = (n = 1) => {
  state += n
}
