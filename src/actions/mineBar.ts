import assert from 'assert'
import crypto from 'crypto'
import type { Robot } from '~/models/robot'
import { log } from '~/models/robot'
import { create as createBar } from '~/models/bar'
import { wait } from '~/utils/async'

export const mineBar = async (robot: Robot) => {
  assert(
    robot.state === 'MOVING',
    `Invalid state. Expected MOVING, got ${robot.state}`
  )

  robot.state = 'MINING'

  log(robot, 'mining bar...')

  await wait(crypto.randomInt(1, 5) / 2)

  const bar = createBar()

  log(robot, `mined bar ${bar.id}`)

  robot.state = 'IDLE'
}
