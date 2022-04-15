import crypto from 'crypto'
import assert from 'assert'
import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'
import { sell as sellFooBarFromFooBar } from '~/models/fooBar'
import { sellFooBar as sellFooBarFromWallet } from '~/models/wallet'
import { wait } from '~/utils/async'

export const sell = async (robot: Robot) => {
  assert(
    robot.state === 'MOVING',
    `Invalid state. Expected MOVING, got ${robot.state}`
  )

  robot.state = 'SELLING'

  const salesCount = crypto.randomInt(1, 6)

  log(robot, `selling ${salesCount} fooBars...`)

  sellFooBarFromFooBar(salesCount)
  sellFooBarFromWallet(salesCount)

  await wait(10)

  log(robot, `sold ${salesCount} fooBars...`)

  robot.state = 'IDLE'
}
